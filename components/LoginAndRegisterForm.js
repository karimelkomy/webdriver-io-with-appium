export default class LoginAndRegisterForm {
  constructor() {
    this.emailInput = $("//android.widget.EditText[1]");
    this.passwordInput = $("//android.widget.EditText[2]");
    this.registerButton = $("//android.widget.Button[2]");
  }

  async submit({ email, password }) {
    await this.emailInput.addValue(email);
    await this.passwordInput.addValue(password);
    await this.registerButton.click();
  }
}
