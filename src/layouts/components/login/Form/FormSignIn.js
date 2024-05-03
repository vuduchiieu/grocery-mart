import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import icon from "~/assets/icon";
import classNames from "classnames/bind";
import styles from "./formLogin.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "~/redux/apiRequest";

const cx = classNames.bind(styles);

function FormSignIn() {
  const isLoading = useSelector((state) => state.auth.login.isFetching);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [check, setCheck] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const toggleCheck = () => {
    setCheck(!check);
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = {
    email,
    username,
    password,
  };

  const handleLogin = (e) => {
    e.preventDefault();
    loginUser(user, dispatch, navigate);
  };

  return (
    <div className={cx("login")}>
      <form onSubmit={handleLogin} className={cx("form")}>
        <div>
          <input
            required
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              if (!e.target.value.includes(" ")) {
                setEmail(e.target.value);
                setUsername(e.target.value);
              }
            }}
          />
          <img className={cx("icon-email")} src={icon.emailIcon} alt="" />
          <div className={cx("error")}></div>
          <input
            required
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => {
              if (!e.target.value.includes(" ")) {
                setPassword(e.target.value);
              }
            }}
          />
          <div className={cx("error")} style={{ height: 20 }}></div>
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
          <div className={cx("recovery")}>
            <label>
              {check === true ? (
                <img src={icon.check} alt="" />
              ) : (
                <img src={icon.noCheck} alt="" />
              )}
              <p>Set as default card</p>
              <input type="checkbox" checked={check} onChange={toggleCheck} />
            </label>
            <Link to="" className={cx("recovery-password")}>
              Recovery Password
            </Link>
          </div>
        </div>

        <button type="submit" className={cx("button")}>
          {isLoading ? (
            <img className={cx("isLoading")} src={icon.loading} alt="" />
          ) : (
            <p>Login</p>
          )}
        </button>
      </form>
      <button className={cx("loginWithGG")}>
        <img src={icon.google} alt="" />
        <p>Sign in with Gmail</p>
      </button>
    </div>
  );
}

export default FormSignIn;
