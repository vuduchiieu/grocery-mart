import classNames from "classnames/bind";
import styles from "./contentNav.module.scss";
import icon from "~/assets/icon";
import { useState } from "react";
import { useAppContext } from "~/components/Context/AppContext";
import { updateUser } from "~/redux/apiRequest";
import { useDispatch } from "react-redux";

const cx = classNames.bind(styles);

function PersonalInfo({ personal, setPersonal }) {
  const { user, isLoading, setIsLoading } = useAppContext();
  const dispatch = useDispatch();

  const [email, setEmail] = useState(user.email || "");
  const [fullname, setFullname] = useState(user.fullname || "");
  const [phone, setPhone] = useState(user.phone || "");
  const [password, setPassword] = useState("");
  const handleBack = () => {
    setPersonal(!personal);
  };
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const [showPassword, setShowPassword] = useState(false);

  const [errEmail, setErrEmail] = useState("");

  const errPassWord = "";
  // "Password must contain at least one number and one capital letter";

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleUpdateUser = (e) => {
    e.preventDefault();
    if (!isValidEmail(email)) {
      setErrEmail("Invalid email");
      return;
    }

    const newUser = {
      fullname,
      email,
      phone,
      password,
    };
    updateUser(newUser, user, dispatch, handleBack, setIsLoading);
  };

  return (
    <div className={cx("content-nav")}>
      <div className={cx("title")}>
        <img onClick={handleBack} src={icon.back} alt="" />
        <h3>Personal info</h3>
      </div>

      <form onSubmit={handleUpdateUser} className={cx("form")}>
        <div className={cx("wrap")}>
          <div className={cx("first-input")}>
            <h4>Full name</h4>
            <input
              type="text"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              placeholder={user.fullname || "Imran Khan"}
            />
            <img src={icon.fullName} alt="" />
          </div>
          <div className={cx("second-input")}>
            <h4>Email address</h4>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder={user.email || "Email"}
            />
            <img src={icon.emailIcon} alt="" />
            <div className={cx("error")}>
              <p>{errEmail}</p>
            </div>
          </div>
          <div className={cx("third-input")}>
            <h4>Phone number</h4>
            <input
              type="number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder={user.phone || "008 01234 56789"}
            />
            <img src={icon.smartphone} alt="" />
          </div>
          <div className={cx("fourth-input")}>
            <h4>Password</h4>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type={showPassword ? "text" : "password"}
              placeholder="Password"
            />
            <div className={cx("error")}>
              <p>{errPassWord}</p>
            </div>
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
          </div>
          <button type="submit" className={cx("save")}>
            {isLoading ? (
              <img className={cx("isLoading")} src={icon.loading} alt="" />
            ) : (
              <p>Save edit</p>
            )}
          </button>
        </div>
      </form>

      <button onClick={handleBack} className={cx("cancel")}>
        Cancel
      </button>
    </div>
  );
}

export default PersonalInfo;
