import { useState } from "react";

interface InputValue {
  email: string;
  password: string;
}

interface InputBlur {
  email: boolean;
  password: boolean;
}

const StateLogin = () => {
  const [enteredValues, setEnteredValues] = useState<InputValue>({
    email: "",
    password: "",
  });

  const [didEdit, setDidEdit] = useState<InputBlur>({
    email: false,
    password: false,
  });

  const emailIsInvalid = didEdit.email && !enteredValues.email.includes("@");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onBlur={() => handleInputBlur("email")}
            onFocus={() => handleInputFocus("email")}
            value={enteredValues.email}
            onChange={handleChange}
          />
          <div className="control-error">
            {emailIsInvalid && <p>Please enter a valid email address.</p>}
          </div>
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
            onChange={handleChange}
          />
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
