// Email validation function
function validateEmail(email) {
  // Email must contain @ and a domain (something after @)
  if (!email || typeof email !== 'string') {
    return { isValid: false, error: 'Email is required' };
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (!emailRegex.test(email)) {
    return { isValid: false, error: 'Email must be valid (example: user@example.com)' };
  }
  
  return { isValid: true };
}

// Password validation function
function validatePassword(password) {
  // Password must be at least 6 characters
  if (!password || typeof password !== 'string') {
    return { isValid: false, error: 'Password is required' };
  }
  
  if (password.length < 6) {
    return { isValid: false, error: 'Password must be at least 6 characters' };
  }
  
  return { isValid: true };
}

// Username validation function
function validateUsername(username) {
  // Username must be at least 3 characters
  if (!username || typeof username !== 'string') {
    return { isValid: false, error: 'Username is required' };
  }
  
  if (username.length < 3) {
    return { isValid: false, error: 'Username must be at least 3 characters' };
  }
  
  return { isValid: true };
}

// Main validation function for signup
function validateSignup(email, password, username) {
  // Validate email
  const emailValidation = validateEmail(email);
  if (!emailValidation.isValid) {
    return emailValidation;
  }
  
  // Validate username
  const usernameValidation = validateUsername(username);
  if (!usernameValidation.isValid) {
    return usernameValidation;
  }
  
  // Validate password
  const passwordValidation = validatePassword(password);
  if (!passwordValidation.isValid) {
    return passwordValidation;
  }
  
  return { isValid: true };
}

// Main validation function for login
function validateLogin(email, password) {
  // Validate email
  const emailValidation = validateEmail(email);
  if (!emailValidation.isValid) {
    return emailValidation;
  }
  
  // Validate password
  const passwordValidation = validatePassword(password);
  if (!passwordValidation.isValid) {
    return passwordValidation;
  }
  
  return { isValid: true };
}

module.exports = {
  validateEmail,
  validatePassword,
  validateUsername,
  validateSignup,
  validateLogin
};
