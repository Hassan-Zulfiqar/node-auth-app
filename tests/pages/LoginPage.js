class LoginPage {
  constructor() {
    this.email = "";
    this.password = "";
  }

  enterEmail(email) {
    this.email = email;
  }

  enterPassword(password) {
    this.password = password;
  }

  submit() {
    if (this.email === "test@test.com" && this.password === "123456") {
      return "Login Successful";
    } else if (!this.email || !this.password) {
      return "Validation Error";
    } else {
      return "Invalid Credentials";
    }
  }
}

module.exports = LoginPage;