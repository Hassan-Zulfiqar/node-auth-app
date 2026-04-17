const { expect } = require('chai');
const { 
  validateEmail, 
  validatePassword, 
  validateUsername,
  validateSignup,
  validateLogin
} = require('../../utils/validation');

describe('Validation Functions', () => {
  
  describe('validateEmail', () => {
    it('should accept valid email', () => {
      const result = validateEmail('test@test.com');
      expect(result.isValid).to.be.true;
    });
    
    it('should reject email without @', () => {
      const result = validateEmail('testtest.com');
      expect(result.isValid).to.be.false;
    });
    
    it('should reject email without domain', () => {
      const result = validateEmail('test@');
      expect(result.isValid).to.be.false;
    });
    
    it('should reject empty email', () => {
      const result = validateEmail('');
      expect(result.isValid).to.be.false;
    });
  });
  
  describe('validatePassword', () => {
    it('should accept password with 6 characters', () => {
      const result = validatePassword('123456');
      expect(result.isValid).to.be.true;
    });
    
    it('should accept password longer than 6 characters', () => {
      const result = validatePassword('password123');
      expect(result.isValid).to.be.true;
    });
    
    it('should reject password shorter than 6 characters', () => {
      const result = validatePassword('12345');
      expect(result.isValid).to.be.false;
    });
    
    it('should reject empty password', () => {
      const result = validatePassword('');
      expect(result.isValid).to.be.false;
    });
  });
  
  describe('validateUsername', () => {
    it('should accept username with 3 characters', () => {
      const result = validateUsername('abc');
      expect(result.isValid).to.be.true;
    });
    
    it('should accept username longer than 3 characters', () => {
      const result = validateUsername('testuser');
      expect(result.isValid).to.be.true;
    });
    
    it('should reject username shorter than 3 characters', () => {
      const result = validateUsername('ab');
      expect(result.isValid).to.be.false;
    });
    
    it('should reject empty username', () => {
      const result = validateUsername('');
      expect(result.isValid).to.be.false;
    });
  });
  
  describe('validateSignup', () => {
    it('should validate all correct inputs', () => {
      const result = validateSignup('user@example.com', 'password123', 'testuser');
      expect(result.isValid).to.be.true;
    });
    
    it('should reject invalid email', () => {
      const result = validateSignup('invalidemail', 'password123', 'testuser');
      expect(result.isValid).to.be.false;
    });
    
    it('should reject short password', () => {
      const result = validateSignup('user@example.com', '12345', 'testuser');
      expect(result.isValid).to.be.false;
    });
    
    it('should reject short username', () => {
      const result = validateSignup('user@example.com', 'password123', 'ab');
      expect(result.isValid).to.be.false;
    });
  });
  
  describe('validateLogin', () => {
    it('should validate all correct inputs', () => {
      const result = validateLogin('test@test.com', '123456');
      expect(result.isValid).to.be.true;
    });
    
    it('should reject invalid email', () => {
      const result = validateLogin('invalidemail', '123456');
      expect(result.isValid).to.be.false;
    });
    
    it('should reject short password', () => {
      const result = validateLogin('test@test.com', '12345');
      expect(result.isValid).to.be.false;
    });
  });
  
});
