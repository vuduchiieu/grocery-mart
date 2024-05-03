import classNames from "classnames/bind";
import { useAppContext } from "~/components/Context/AppContext";
import { useDispatch } from "react-redux";
import { logoutUser, updateUser } from "~/redux/apiRequest";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { enGB } from "date-fns/locale";
import { format, parseISO } from "date-fns";

import styles from "./navBar.module.scss";
import img from "~/assets/img";
import icon from "~/assets/icon";

const cx = classNames.bind(styles);

function NavBar({ handleInfo, handleAddresses, handleLists }) {
  const { user, isLoading, setIsLoading } = useAppContext();
  const [avatar, setAvatar] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState("");
  const [isForcus, setIsForcus] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = () => {
    logoutUser(dispatch, navigate);
  };
  useEffect(() => {
    if (avatar) {
      const imageURL = URL.createObjectURL(avatar);
      setAvatarPreview(imageURL);
    }
  }, [avatar]);

  const handleUpdateUser = (e) => {
    e.preventDefault();
    const newUser = new FormData();
    if (avatar) {
      newUser.append("avatar", avatar);
    }
    updateUser(newUser, user, dispatch, null, setIsLoading);
  };

  const createdAt = format(
    parseISO(user.createdAt || user.updatedAt),
    "do MMM yyyy",
    {
      locale: enGB,
    }
  );

  return (
    <div className={cx("nav-bar")}>
      <div className={cx("profile")}>
        <img className={cx("background")} src={img.backGroundProfile} alt="" />
        <div className={cx("avatar")}>
          <img
            onMouseEnter={() => setIsForcus(true)}
            onMouseLeave={() => {
              if (isForcus === true) {
                setTimeout(() => {
                  setIsForcus(false);
                }, 5000);
              }
            }}
            src={avatarPreview || user.avatar?.url || img.avatar}
            alt="avatar"
            className={cx("img", { hover: isForcus })}
          />
          <form onSubmit={handleUpdateUser}>
            <input
              id="file-upload"
              type="file"
              onChange={(e) => {
                setAvatar(e.target.files[0]);
              }}
            />
            <button id="submit" type="submit"></button>
          </form>
          {isForcus && (
            <div className={cx("action")}>
              <label className={cx("select")} htmlFor="file-upload">
                <img src={icon.camera} alt="camera" />
              </label>
              {avatarPreview && (
                <label className={cx("select")} htmlFor="submit">
                  {isLoading ? (
                    <img
                      className={cx("isLoading")}
                      src={icon.loading}
                      alt=""
                    />
                  ) : (
                    <img src={icon.ok} alt="camera" />
                  )}
                </label>
              )}
            </div>
          )}
          <p className={cx("name")}>{user.fullname || user.username}</p>
          <p className={cx("registered")}>Registered: {createdAt}</p>
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
