const { expect } = require('chai');
const LoginPage = require('../pages/LoginPage');

describe('Login Integration Tests', () => {

  it('should login successfully with correct credentials', () => {
    const page = new LoginPage();
    page.enterEmail('test@test.com');
    page.enterPassword('123456');

    const result = page.submit();
    expect(result).to.equal('Login Successful');
  });

  it('should fail with wrong password', () => {
    const page = new LoginPage();
    page.enterEmail('test@test.com');
    page.enterPassword('wrong123');

    const result = page.submit();
    expect(result).to.equal('Invalid Credentials');
  });

  it('should fail with non-existing user', () => {
    const page = new LoginPage();
    page.enterEmail('abc@test.com');
    page.enterPassword('123456');

    const result = page.submit();
    expect(result).to.equal('Invalid Credentials');
  });

  it('should show error on empty form', () => {
    const page = new LoginPage();

    const result = page.submit();
    expect(result).to.equal('Validation Error');
  });

});

const SignupPage = require('../pages/SignupPage');

describe('Signup Integration Tests', () => {

  it('should signup successfully with valid data', () => {
    const page = new SignupPage();
    page.enterUsername('ahmad');
    page.enterEmail('test@test.com');
    page.enterPassword('123456');

    const result = page.submit();
    expect(result).to.equal('Signup Successful');
  });

  it('should fail with short password', () => {
    const page = new SignupPage();
    page.enterUsername('ahmad');
    page.enterEmail('test@test.com');
    page.enterPassword('123');

    const result = page.submit();
    expect(result).to.equal('Validation Error');
  });

  it('should fail with invalid email', () => {
    const page = new SignupPage();
    page.enterUsername('ahmad');
    page.enterEmail('invalidemail');
    page.enterPassword('123456');

    const result = page.submit();
    expect(result).to.equal('Validation Error');
  });

  it('should fail with short username', () => {
    const page = new SignupPage();
    page.enterUsername('ab');
    page.enterEmail('test@test.com');
    page.enterPassword('123456');

    const result = page.submit();
    expect(result).to.equal('Validation Error');
  });

});

it('should handle special characters in email', () => {
  const page = new SignupPage();
  page.enterUsername('user123');
  page.enterEmail('test+1@test.com');
  page.enterPassword('123456');

  const result = page.submit();
  expect(result).to.equal('Signup Successful');
});

it('should handle rapid multiple submissions', () => {
  const page = new LoginPage();
  page.enterEmail('test@test.com');
  page.enterPassword('123456');

  for (let i = 0; i < 5; i++) {
    const result = page.submit();
    expect(result).to.equal('Login Successful');
  }
});