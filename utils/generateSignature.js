const crypto = require('crypto');

const generateSignature = (merchant_id, merchant_key, amount, item_name) => {
  const dataString = `merchant_id=${merchant_id}&merchant_key=${merchant_key}&amount=${amount}&item_name=${item_name}`;
  return crypto.createHash('md5').update(dataString).digest('hex');
};

module.exports = generateSignature;
