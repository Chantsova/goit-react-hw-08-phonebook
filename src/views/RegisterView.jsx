import { useState } from "react";
import { useDispatch } from "react-redux";
import * as authOperation from "../components/redux/auth/auth-operations";
import { Toaster } from "react-hot-toast";

export default function RegisterView() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "name":
        setName(value);
        break;

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
    dispatch(authOperation.register({ name, email, password }));
    reset();
  };

  const reset = () => {
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <div className="formPage">
        <h1 className="title">Get your own phonebook in minute! </h1>
        <p className="formPage__subtitle">Complete the registration form</p>

        <form
          className="formPage__form"
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <label className="formPage__item">
            <span className="formPage__text">Name:</span>
            <input
              className="formPage__input"
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
            ></input>
          </label>

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

          <button className="formPage__btn">Register Now</button>
        </form>
      </div>

      <div>
        <Toaster />
      </div>
    </>
  );
}
