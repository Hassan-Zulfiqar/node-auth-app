const express = require('express');
const router = express.Router();
const { validateSignup, validateLogin } = require('../utils/validation');

// Hardcoded test user (for demo purposes only)
const TEST_USER = {
  email: 'test@test.com',
  password: '123456',
  username: 'testuser'
};

// GET /login - Display login page
router.get('/login', (req, res) => {
  res.render('login', { message: null });
});

// POST /login - Handle login form submission
router.post('/login', (req, res) => {
  const { email, password } = req.body;
  
  // Validate input
  const validation = validateLogin(email, password);
  
  if (!validation.isValid) {
    return res.render('login', { message: validation.error });
  }
  
  // Check credentials against hardcoded user
  if (email === TEST_USER.email && password === TEST_USER.password) {
    return res.render('login', { 
      message: `Welcome ${TEST_USER.username}! Login successful!`,
      success: true 
    });
  }
  
  // Invalid credentials
  res.render('login', { message: 'Invalid email or password' });
});

// GET /signup - Display signup page
router.get('/signup', (req, res) => {
  res.render('signup', { message: null });
});

// POST /signup - Handle signup form submission
router.post('/signup', (req, res) => {
  const { email, password, username } = req.body;
  
  // Validate input
  const validation = validateSignup(email, password, username);
  
  if (!validation.isValid) {
    return res.render('signup', { message: validation.error });
  }
  
  // In a real app, we would save to database here
  // For this demo, we just show a success message
  res.render('signup', { 
    message: `Account created successfully! Use these credentials to login.`,
    success: true,
    userDetails: {
      username: username,
      email: email
    }
  });
});

// GET / - Redirect to login as home page
router.get('/', (req, res) => {
  res.redirect('/login');
});

module.exports = router;
