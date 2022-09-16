import LoginAndRegisterForm from "../../components/LoginAndRegisterForm";
import { UserDetails } from "../../data/userDetails";
import RegisterForm from "../../components/RegisterForm";

describe("Login Form", () => {
  it("Register with email and password", async () => {
    const loginAndRegisterForm = new LoginAndRegisterForm();
    const registerForm = new RegisterForm();

    await loginAndRegisterForm.submit(UserDetails);
    await registerForm.submit(UserDetails);
  });
});
