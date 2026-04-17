class SignupPage {
  constructor() {
    this.username = "";
    this.email = "";
    this.password = "";
  }

  enterUsername(username) {
    this.username = username;
  }

  enterEmail(email) {
    this.email = email;
  }

  enterPassword(password) {
    this.password = password;
  }

  submit() {
    if (
      this.username.length >= 3 &&
      this.password.length >= 6 &&
      this.email.includes("@")
    ) {
      return "Signup Successful";
    } else {
      return "Validation Error";
    }
  }
}

module.exports = SignupPage;