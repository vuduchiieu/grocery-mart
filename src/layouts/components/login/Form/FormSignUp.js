import { useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./formLogin.module.scss";
import { useState } from "react";
import icon from "~/assets/icon";
import { useDispatch } from "react-redux";
import { registerUser } from "~/redux/apiRequest";

const cx = classNames.bind(styles);

function FormSignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const [errEmail, setErrEmail] = useState("");
  const [errUsername, setErrUsername] = useState("");
  const [errPassWord, setErrPassWord] = useState("");

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const isValidUsername = (username) => {
    const usernameRegex = username.length > 6;
    return usernameRegex;
  };
  const isValidPassword = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    return passwordRegex.test(password);
  };

  const handleCreateUser = async (e) => {
    e.preventDefault();

    const newUser = {
      email,
      username,
      password,
    };

    if (!isValidEmail(email)) {
      setErrEmail("Invalid email");
      return;
    }

    if (!isValidUsername(username)) {
      setErrUsername("Invalid username");
      return;
    }

    if (!isValidPassword(password)) {
      setErrPassWord(
        "Password must contain at least one number and one capital letter"
      );
      return;
    }
    registerUser(newUser, dispatch, navigate);
  };

  return (
    <div className={cx("sign-up")}>
      <form onSubmit={handleCreateUser} className={cx("form")}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <img className={cx("icon-email")} src={icon.emailIcon} alt="" />
        <div className={cx("error")}>
          <p>{errEmail}</p>
        </div>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <div className={cx("error")}>
          <p>{errUsername}</p>
        </div>
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label className={cx("password")}>
          {showPassword === true ? (
            <img src={icon.unlock} alt="" />
          ) : (
            <img src={icon.lock} alt="" />
          )}
          <input
            type="checkbox"
            checked={showPassword}
            onChange={toggleShowPassword}
          />
        </label>
        <div className={cx("error")}>
          <p>{errPassWord}</p>
        </div>

        <button className={cx("button")} type="submit">
          <p>Sign Up</p>
        </button>
      </form>

      <button className={cx("loginWithGG")}>
        <img src={icon.google} alt="" />
        <p>Sign in with Gmail</p>
      </button>
    </div>
  );
}

export default FormSignUp;
