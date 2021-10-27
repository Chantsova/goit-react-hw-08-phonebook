import { useState } from "react";
import { useDispatch } from "react-redux";
import * as authOperation from "../components/redux/auth/auth-operations";
import { Toaster } from "react-hot-toast";

export default function LoginView() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "email":
        setEmail(value);
        break;

      case "password":
        setPassword(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authOperation.logIn({ email, password }));
    reset();
  };

  const reset = () => {
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <div className="formPage">
        <h1 className="title">Login and enjoy working with your phonebook</h1>

        <form
          className="formPage__form"
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <label className="formPage__item">
            <span className="formPage__text">Email:</span>
            <input
              className="formPage__input"
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
            ></input>
          </label>

          <label className="formPage__item">
            <span className="formPage__text">Password:</span>
            <input
              className="formPage__input"
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
            ></input>
          </label>

          <button className="formPage__btn">Login</button>
        </form>
      </div>

      <div>
        <Toaster />
      </div>
    </>
  );
}
