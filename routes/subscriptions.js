const express = require('express');
const router = express.Router();
const User = require('../models/User');
const axios = require('axios');
const crypto = require('crypto');

// Subscription plans
const subscriptionPlans = {
  monthly: { amount: 10000, frequency: 3, cycles: 0 }, // R100 monthly, indefinite cycles
  yearly: { amount: 300000, frequency: 6, cycles: 1 } // R3000 yearly
};

// Helper function to create a signature
function createSignature(params, passphrase) {
  let paramString = Object.keys(params).sort().map(key => `${key}=${encodeURIComponent(params[key])}`).join('&');
  paramString += `&passphrase=${encodeURIComponent(passphrase)}`;
  return crypto.createHash('md5').update(paramString).digest('hex');
}

// Route to create a subscription
router.post('/create', async (req, res) => {
  const { userId, plan } = req.body;

  if (!subscriptionPlans[plan]) {
    return res.status(400).send('Invalid subscription plan');
  }

  const user = await User.findById(userId);
  if (!user) {
    return res.status(404).send('User not found');
  }

  const subscriptionPlan = subscriptionPlans[plan];
  const paymentData = {
    merchant_id: process.env.PAYFAST_MERCHANT_ID,
    merchant_key: process.env.PAYFAST_MERCHANT_KEY,
    return_url: 'https://your-ngrok-url/success',
    cancel_url: 'https://your-ngrok-url/cancel',
    notify_url: 'https://your-ngrok-url/api/payment/webhook',
    name_first: user.username,
    name_last: '',
    email_address: user.email,
    m_payment_id: user._id.toString(),
    amount: (subscriptionPlan.amount / 100).toFixed(2),
    item_name: `${plan} subscription`,
    item_description: `Subscription plan: ${plan}`,
    subscription_type: 1,
    billing_date: new Date().toISOString().split('T')[0],
    recurring_amount: (subscriptionPlan.amount / 100).toFixed(2),
    frequency: subscriptionPlan.frequency,
    cycles: subscriptionPlan.cycles
  };

  const signature = createSignature(paymentData, process.env.PAYFAST_PASSPHRASE);
  paymentData.signature = signature;

  try {
    const response = await axios.post('https://www.payfast.co.za/eng/process', paymentData);
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error creating subscription:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Route to handle subscription webhook (use Thunder Client to send POST requests to this endpoint)
router.post('/webhook', async (req, res) => {
  const { type, token, initial_amount, amount, next_run, frequency, item_name, item_description, name_first, name_last, email_address } = req.body;

  console.log('Webhook received:', req.body);

  // Update user's subscription details in the database based on the webhook notification
  try {
    const user = await User.findOne({ email: email_address });
    if (user) {
      user.subscription = {
        plan: item_name.split(' ')[0], // Extracting plan type from item_name
        nextBillingDate: new Date(next_run)
      };
      user.hasPaid = true;
      await user.save();

      console.log('Subscription status updated for user:', email_address);
      res.status(200).send('Webhook received and processed');
    } else {
      console.log('User not found for email:', email_address);
      res.status(404).send('User not found');
    }
  } catch (error) {
    console.error('Error processing webhook:', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
