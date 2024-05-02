import classNames from "classnames/bind";
import styles from "./contentProfile.module.scss";
import img from "~/assets/img";
import icon from "~/assets/icon";
import { useAppContext } from "~/components/Context/AppContext";

const cx = classNames.bind(styles);

function ContentProfile({ personal, setPersonal, addresses, setAddresses }) {
  const { user, detailed, town, state, dc, listHeart, updateCartItem } =
    useAppContext();
  const handleInfo = () => {
    setPersonal(!personal);
  };
  const handleAddresses = () => {
    setAddresses(!addresses);
  };

  console.log(user);

  return (
    <div className={cx("content")}>
      <div className={cx("wallet")}>
        <h3>My Wallet</h3>
        <p>Payment methods</p>
        <div className={cx("card")}>
          <img src={img.cardViolet} alt="" />
          <img src={img.cardGray} alt="" />
          <img src={img.addNewCard} alt="" />
        </div>
      </div>
      <div className={cx("account-info")}>
        <h3>Account info</h3>
        <p>Addresses, contact information and password</p>
        <div className={cx("info")}>
          <div onClick={handleInfo} className={cx("email-address")}>
            <img src={icon.message} alt="" />
            <div>
              <h4>Email Address</h4>
              <p>{user.email}</p>
            </div>
          </div>
          <div onClick={handleInfo} className={cx("phone-number")}>
            <img src={icon.calling} alt="" />
            <div>
              <h4>Phone number</h4>
              <p>{user.phoneNumber}</p>
            </div>
          </div>

          <div onClick={handleAddresses} className={cx("add-an-address")}>
            <img src={icon.location} alt="" />
            <div>
              <h4>Add an address</h4>
              <p>
                <span>{detailed || user.detailed}</span>,{" "}
                <span>{town || user.town}</span>,{" "}
                <span>{state || user.state}</span>, <span>{dc || user.dc}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={cx("lists")}>
        <h3>Lists</h3>
        <p>{listHeart.length} items - Primary</p>
        <div className={cx("wrap")}>
          {listHeart.map((item, i) => (
            <div key={i} className={cx("list-products")}>
              <img src={item.img} alt="" />
              <div>
                <p className={cx("name")}>{item.desc}</p>
                <div className={cx("price")}>
                  <p>${item.price}</p>
                  <button onClick={() => updateCartItem(listHeart[i])}>
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ContentProfile;
