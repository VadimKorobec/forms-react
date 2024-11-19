import { useState } from "react";

interface Values {
  email: string;
  password: string;
}

const Login = () => {
  // const [enteredEmail, setEnteredEmail] = useState<string>("");
  // const [enteredPassword, setEnteredPassword] = useState<string>("");
  const [enteredValues, setEnteredValues] = useState<Values>({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setEnteredValues((prevState) => ({ ...prevState, [name]: value }));
  };

  // const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setEnteredEmail(e.target.value);
  // };

  // const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setEnteredPassword(e.target.value);
  // };

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
            value={enteredValues.email}
            onChange={handleChange}
          />
        </div>
        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
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

export default Login;
