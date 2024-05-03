import classNames from "classnames/bind";
import styles from "./contentNav.module.scss";
import icon from "~/assets/icon";
import { useAppContext } from "~/components/Context/AppContext";
import { updateUser } from "~/redux/apiRequest";
import { useDispatch } from "react-redux";
import { useState } from "react";

const cx = classNames.bind(styles);

function Addresses({ addresses, setAddresses }) {
  const { user, isLoading, setIsLoading } = useAppContext();
  const dispatch = useDispatch();
  const handleBack = () => {
    setAddresses(!addresses);
  };
  const [detailedAddress, setDetailedAddress] = useState(
    user.detailedAddress || ""
  );
  const [town, setTown] = useState(user.town || "");
  const [city, setCity] = useState(user.city || "");
  const [postcode, setPostcode] = useState(user.postcode || "");

  const handleUpdateUser = (e) => {
    e.preventDefault();
    const newUser = {
      detailedAddress,
      town,
      city,
      postcode,
    };
    updateUser(newUser, user, dispatch, handleBack, setIsLoading);
  };

  return (
    <div className={cx("content-nav")}>
      <div className={cx("title")}>
        <img onClick={handleBack} src={icon.back} alt="" />
        <h3>Addresses</h3>
      </div>
      <form className={cx("form")} onSubmit={handleUpdateUser}>
        <div className={cx("wrap")}>
          <div className={cx("first-input")}>
            <h4>Detailed address</h4>
            <input
              value={detailedAddress}
              onChange={(e) => setDetailedAddress(e.target.value)}
              type="text"
              placeholder={user.detailedAddress || "Detailed address"}
            />
          </div>
          <div className={cx("second-input")}>
            <h4>Town</h4>
            <input
              type="text"
              value={town}
              onChange={(e) => setTown(e.target.value)}
              placeholder={user.town || "Town"}
            />
          </div>
          <div className={cx("third-input")}>
            <h4>State/ Province/ City</h4>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder={user.city || "State/ Province/ City"}
            />
          </div>
          <div className={cx("third-input")}>
            <h4>Postcode</h4>
            <input
              type="number"
              value={postcode}
              onChange={(e) => setPostcode(e.target.value)}
              placeholder={user.postcode || "DC..."}
            />
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

export default Addresses;
