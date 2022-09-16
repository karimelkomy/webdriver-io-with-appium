import { driverShouldDoJwpProxy } from "@appium/base-driver/build/lib/protocol/protocol";

export default class RegisterForm {
  constructor() {
    this.emailInput = $("//android.widget.EditText[1]");
    this.passwordInput = $("//android.widget.EditText[2]");
    this.confirmPasswordInput = $("//android.widget.EditText[3]");
    this.createButton = $("//android.widget.Button");
  }

  async submit({ email, password }) {
    await this.emailInput.addValue(email);
    await this.passwordInput.addValue(password);
    await this.confirmPasswordInput.addValue(password);
    await this.createButton.click();
  }
}
