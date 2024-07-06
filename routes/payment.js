const express = require('express');
const router = express.Router();
const crypto = require('crypto');

// Utility function to generate the signature
const generateSignature = (merchant_id, merchant_key, amount, item_name) => {
  const dataString = `merchant_id=${merchant_id}&merchant_key=${merchant_key}&amount=${amount}&item_name=${item_name}`;
  return crypto.createHash('md5').update(dataString).digest('hex');
};

router.post('/submit', (req, res) => {
  const { merchant_id, merchant_key, amount, item_name } = req.body;
  
  if (!merchant_id || !merchant_key || !amount || !item_name) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const signature = generateSignature(merchant_id, merchant_key, amount, item_name);

  // Send the data to the payment gateway or handle it as needed
  // For this example, we'll just return the data and signature
  res.json({
    merchant_id,
    merchant_key,
    amount,
    item_name,
    signature
  });
});

module.exports = router;
