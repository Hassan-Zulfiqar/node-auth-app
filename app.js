const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const authRoutes = require('./routes/auth');

// Initialize Express app
const app = express();

// Set up view engine (EJS)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
// Parse URL-encoded bodies (as sent by HTML forms)
app.use(bodyParser.urlencoded({ extended: false }));

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

// Routes
// Mount authentication routes
app.use(authRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// 404 handler - must be last
app.use((req, res) => {
  res.status(404).send('Page not found');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`\n========================================`);
  console.log(`Auth App is running on http://localhost:${PORT}`);
  console.log(`========================================\n`);
  console.log('Routes available:');
  console.log('  GET  /login   - Login page');
  console.log('  POST /login   - Submit login form');
  console.log('  GET  /signup  - Signup page');
  console.log('  POST /signup  - Submit signup form');
  console.log('\nTest Credentials:');
  console.log('  Email: test@test.com');
  console.log('  Password: 123456\n');
});

module.exports = app;
