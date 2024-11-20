import { useState } from "react";
import Input from "./Input";
import { hasMinLength, isEmail, isNotEmpty } from "../util/validation";

interface InputValue {
  email: string;
  password: string;
}

export interface InputBlur {
  email: boolean;
  password: boolean;
}

const StateLogin = () => {
  const [enteredValues, setEnteredValues] = useState<InputValue>({
    email: "",
    password: "",
  });

  console.log(enteredValues);

  const [didEdit, setDidEdit] = useState<InputBlur>({
    email: false,
    password: false,
  });

  const emailIsInvalid =
    didEdit.email &&
    !isEmail(enteredValues.email) &&
    !isNotEmpty(enteredValues.email);

  const passwordIsValid =
    didEdit.password && !hasMinLength(enteredValues.password, 6);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setEnteredValues((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleInputBlur = (field: keyof InputBlur) => {
    setDidEdit((prevState) => ({ ...prevState, [field]: true }));
  };

  const handleInputFocus = (field: keyof InputBlur) => {
    setDidEdit((prevState) => ({ ...prevState, [field]: false }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div className="control-row">
        <div className="control no-margin">
          <Input
            id="email"
            type="email"
            name="email"
            title="Email"
            onBlur={handleInputBlur}
            onFocus={handleInputFocus}
            onChange={handleInputChange}
            value={enteredValues.email}
            error={emailIsInvalid}
          />
        </div>
        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onBlur={() => handleInputBlur("password")}
            onFocus={() => handleInputFocus("password")}
            value={enteredValues.password}
            onChange={handleInputChange}
          />
          <div className="control-error">
            {passwordIsValid && <p>Please enter a valid email address.</p>}
          </div>
        </div>
      </div>
      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button type="submit" className="button">
          Login
        </button>
      </p>
    </form>
  );
};

export default StateLogin;
