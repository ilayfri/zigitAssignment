import { useState } from "react";
import "./Login.css";
import * as EmailValidator from "email-validator";
import { postRequest } from "../API/ApiRequests";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassowrd] = useState("");
  const [emailInputTouched, setEmailInputTouched] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const validEmail = email.trim() !== "";
  const inValidEmail = !validEmail && emailInputTouched;

  const emailInputChangeHandler = (type: string, event: any) => {
    if (type == "email") {
      setErrorMessage("");
      setEmail(event.target.value);
    } else if (type == "password") {
      setErrorMessage("");
      setPassowrd(event.target.value);
    }
  };

  const emailInputBlurHandler = (event: any) => {
    setEmailInputTouched(true);
  };

  const subbmisionHanlder = async (event: any, emailAddress: String) => {
    event.preventDefault();
    setErrorMessage("");
    setEmailInputTouched(true);
    if (!validEmail) {
      return;
    }
    if (!EmailValidator.validate(email)) {
      setErrorMessage("Please insert a valid email");
      return;
    }
    if (
      !(/[A-Z]/.test(password) && /\d/.test(password) && password.length > 7)
    ) {
      setErrorMessage("Please insert a vaild password.");
      return;
    }
    setIsLoading(true);
    try {
      const data = await postRequest(
        "POST",
        "authenticate",
        JSON.stringify({ email: emailAddress })
      );
      if (data) {
        sessionStorage.setItem("token", data[0].token);
        sessionStorage.setItem("username", email);
        sessionStorage.setItem("password", password);
        setEmailInputTouched(false);
        if (sessionStorage.getItem("token")) {
          window.location.assign("/info");
        }
        setEmail("");
        setPassowrd("");
      } else {
        setErrorMessage("Some server error occurred. Please try again");
        setIsLoading(false);
      }
    } catch (err) {
      setEmailInputTouched(false);
      setIsLoading(false);
      setErrorMessage(err.message);
    }
  };
  return (
    <>
      {console.log()}
      <div className="login-wrapper">
        <div className="login-form-wrapper">
          <div className="login-form-top">
            <h3>ZIGIT Assignment Login</h3>
          </div>
          <form
            onSubmit={(e) => {
              subbmisionHanlder(e, email);
            }}
          >
            <div className="login-form-body">
              <label>
                <p>Email address</p>
                <input
                  type="text"
                  className={
                    inValidEmail == true ||
                    (!EmailValidator.validate(email) && errorMessage != "")
                      ? "error-border"
                      : ""
                  }
                  value={email}
                  onChange={(e) => {
                    emailInputChangeHandler("email", e);
                  }}
                  onBlur={emailInputBlurHandler}
                />
              </label>

              <label>
                <p>Password</p>
                <input
                  type="password"
                  value={password}
                  className={
                    !(/[A-Z]/.test(password) && /\d/.test(password) && password.length > 7) &&
                    errorMessage != ""
                      ? "error-border"
                      : ""
                  }
                  onChange={(e) => {
                    emailInputChangeHandler("password", e);
                  }}
                />
              </label>
            </div>
            <hr></hr>
            <div className="login-form-buttom">
              <div>
                <p className="error">
                  {inValidEmail ? "Email must not be empty" : errorMessage}
                </p>
              </div>
              <button
                className="form-button"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? "Logging in.." : "Login"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Login;
