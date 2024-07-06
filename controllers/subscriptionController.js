const crypto = require('crypto');
const User = require('../models/User');
const querystring = require('querystring');

exports.initiateSubscription = async (req, res) => {
  const { userId, plan } = req.body;

  if (!userId || !plan) {
    return res.status(400).json({ error: 'User ID and plan are required' });
  }

  try {
    // Retrieve user from the database
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Define PayFast details
    const payFastMerchantId = '23914842';
    const payFastMerchantKey = 'qe2ohyvvxohrr';
    const payFastPassphrase = 'Mbuteri121212';  // Ensure this matches your settings in PayFast
    const payFastReturnUrl = 'http://localhost:3000/success';
    const payFastCancelUrl = 'http://localhost:3000/cancel';
    const payFastNotifyUrl = 'https://917a-105-245-241-112.ngrok-free.app/api/payment/webhook';

    // Define the subscription details
    const amount = plan === 'monthly' ? '100.00' : plan === 'yearly' ? '300.00' : '3000.00';
    const itemName = `Subscription (${plan})`;
    const frequency = '3';  // Monthly
    const cycles = '12';    // 12 payments

    // Prepare data for PayFast subscription
    const payFastData = {
      merchant_id: payFastMerchantId,
      merchant_key: payFastMerchantKey,
      amount,
      item_name: itemName,
      return_url: payFastReturnUrl,
      cancel_url: payFastCancelUrl,
      notify_url: payFastNotifyUrl,
      email_address: user.email,
      name_first: user.firstName || 'First Name',
      name_last: user.lastName || 'Last Name',
      m_payment_id: crypto.randomBytes(16).toString('hex'),
      subscription_type: '1',  // Subscription type
      billing_date: '2024-06-27',  // Optional billing date (YYYY-MM-DD)
      recurring_amount: amount,  // Optional recurring amount (in ZAR)
      frequency,
      cycles,
      subscription_notify_email: 'true',  // Optional notification settings
      subscription_notify_webhook: 'true',
      subscription_notify_buyer: 'true'
    };

    // Sort keys alphabetically for signature generation
    const sortedKeys = Object.keys(payFastData).sort();
    const sortedPayFastData = {};
    sortedKeys.forEach(key => {
      sortedPayFastData[key] = payFastData[key];
    });

    // Generate the signature
    const signatureString = querystring.stringify(sortedPayFastData) + `&passphrase=${payFastPassphrase}`;
    const signature = crypto.createHash('md5').update(signatureString).digest('hex').toLowerCase();
    sortedPayFastData.signature = signature;

    // Construct the payment URL
    const paymentUrl = `https://www.payfast.co.za/eng/process?${querystring.stringify(sortedPayFastData)}`;

    res.status(200).json({ url: paymentUrl });
  } catch (error) {
    console.error('Error initiating subscription:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
