const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true }, // Username is required and must be unique
  password: { type: String, required: true }, // Password is required
  email: { type: String, required: true, unique: true }, // Email is required and must be unique
  isAdmin: { type: Boolean, default: false }, // isAdmin defaults to false
  topics: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Topic' }], // Array of ObjectIds referencing Topic model
  hasPaid: { type: Boolean, default: false }, // hasPaid defaults to false
  createdAt: { type: Date, default: Date.now } // createdAt defaults to current date/time
});

// Plugin Passport-Local Mongoose for simplified username/password handling
UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);
