import classNames from "classnames/bind";
import styles from "./navBar.module.scss";
import img from "~/assets/img";
import icon from "~/assets/icon";
import { useAppContext } from "~/components/Context/AppContext";
import { useDispatch } from "react-redux";
import { logoutUser } from "~/redux/apiRequest";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(styles);

function NavBar({ handleInfo, handleAddresses, handleLists }) {
  const { user, avatar, uploadAvatar } = useAppContext();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = () => {
    logoutUser(dispatch, navigate);
  };

  return (
    <div className={cx("nav-bar")}>
      <div className={cx("profile")}>
        <img className={cx("background")} src={img.backGroundProfile} alt="" />
        <div className={cx("avatar")}>
          <label htmlFor="imagine">
            <input
              type="file"
              id="imagine"
              style={{ display: "none" }}
              onChange={(e) => uploadAvatar(e)}
            />{" "}
            {avatar === undefined ? (
              <img src={img.avatar} alt="" />
            ) : (
              <img src={avatar.review} alt="" />
            )}
          </label>

          <p className={cx("name")}>{user.fullname || user.username}</p>

          <p className={cx("registered")}>Registered: 10th Nov 2023</p>
        </div>
      </div>
      <div className={cx("account")}>
        <div className={cx("manage-account")}>
          <h3>Manage Account</h3>
          <button onClick={handleInfo} className={cx("personal-info")}>
            <img src={icon.profile} alt="" />
            <p>Personal info</p>
          </button>
          <button onClick={handleAddresses} className={cx("addresses")}>
            <img src={icon.location} alt="" />
            <p>Addresses</p>
          </button>
          <button className={cx("communications")}>
            <img src={icon.message} alt="" />
            <p>Communications & privacy</p>
          </button>
        </div>
        <div className={cx("my-items")}>
          <h3>My items</h3>
          <button className={cx("reorder")}>
            <img src={icon.download} alt="" />
            <p>Reorder</p>
          </button>
          <button onClick={handleLists} className={cx("lists")}>
            <img src={icon.heartNonActive} alt="" />
            <p>Lists</p>
          </button>
          <button className={cx("registries")}>
            <img src={icon.giflt} alt="" />
            <p>Registries</p>
          </button>
        </div>
        <div className={cx("subscriptions-plans")}>
          <h3>Subscriptions & plans</h3>
          <button className={cx("protection-plans")}>
            <img src={icon.shieddone} alt="" />
            <p>Protection plans</p>
          </button>
        </div>
        <div className={cx("customer-service")}>
          <h3>Customer Service</h3>

          <button onClick={handleLogOut} className={cx("log-out")}>
            <img src={icon.danger} alt="" />
            <p>Log out</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
