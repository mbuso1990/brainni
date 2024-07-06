const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const passport = require('passport');
const path = require('path');
require('dotenv').config();
const User = require('./models/User'); // Import the User model

// Create Express app
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const corsOptions = {
  origin: 'http://192.168.43.59:5000',
  credentials: true,
  optionsSuccessStatus: 200,
  logging: true,
};
app.use(cors(corsOptions));

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: process.env.DB_URL,
    collectionName: 'sessions'
  }),
  cookie: { secure: false }
}));
app.use(passport.initialize());
app.use(passport.session());

// Passport configuration
require('./config/passport')(passport);

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// MongoDB connection
mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/questions', require('./routes/questions'));
app.use('/api/results', require('./routes/results'));
app.use('/admin', require('./routes/admin'));
app.use('/api/onboarding', require('./routes/onboarding'));
app.use('/api/topics', require('./routes/topics'));
app.use('/api/answers', require('./routes/answers'));
app.use('/api/users', require('./routes/users')); // Ensure this line is present

// Render the registration form
app.get('/register', (req, res) => {
  res.render('register');
});

// Webhook route to handle payment notifications
app.post('/api/payment/webhook', async (req, res) => {
  const { payment_status, user_id } = req.body;

  if (payment_status === 'COMPLETE') {
    try {
      // Update user's payment status in the database
      const user = await User.findById(user_id);
      if (user) {
        user.hasPaid = true;
        await user.save();
      }
      res.status(200).send('Payment status updated');
    } catch (error) {
      console.error('Error updating payment status:', error);
      res.status(500).send('Internal Server Error');
    }
  } else {
    res.status(400).send('Invalid payment status');
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
