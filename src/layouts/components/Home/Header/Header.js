import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "~/components/Context/AppContext";
import classNames from "classnames/bind";
import styles from "./header.module.scss";

import icon from "~/assets/icon";
import Departments from "./Popper/Departments";
import Grocery from "./Popper/Grocery";
import Beauty from "./Popper/Beautys";
import MiniAddToCartNoProducts from "./Popper/MiniAddToCart/MiniAddToCartNoProducts";
import MiniAddToCart from "./Popper/MiniAddToCart/MiniAddToCart";

import { products } from "~/components/productList/productList";
import img from "~/assets/img";
import { useState } from "react";

const cx = classNames.bind(styles);

function Header() {
  const { listHeart, user, setLists } = useAppContext();
  const [seach, setSeach] = useState(false);
  const navigate = useNavigate();
  const handleForward = () => {
    setLists(true);
    navigate("/profile");
  };
  return (
    <div className={cx("wrap-header")}>
      <div className={cx("header")}>
        <Link to={"/"} className={cx("logo")}>
          <img src={icon.logo} alt="" />
          <h1>siêuTapHóa</h1>
        </Link>
        <div
          className={cx("nav-bar")}
          style={seach === true ? { marginRight: 20 } : {}}
        >
          <div className={cx("departments")}>
            <Departments />
          </div>
          <div className={cx("grocery")}>
            <Grocery />
          </div>
          <div className={cx("beauty")}>
            <Beauty />
          </div>
        </div>
        {!!user ? (
          <div className={cx("action")}>
            <div className={cx("search")}>
              {seach && <input type="text" placeholder="Search for item" />}
              <img
                onClick={() => {
                  setSeach(!seach);
                }}
                alt=""
                src={icon.search}
              />
            </div>
            <div className={cx("wrap-rct")}>
              <div onClick={handleForward} className={cx("reaction")}>
                <img src={icon.heartNonActive} alt="" />
                <p>{listHeart.length}</p>
              </div>
              {products.length > 0 ? (
                <MiniAddToCart />
              ) : (
                <MiniAddToCartNoProducts />
              )}
            </div>
            <Link to={"/profile"} className={cx("avatar")}>
              <img src={user.avatar?.url || img.avatar} alt="" />
            </Link>
          </div>
        ) : (
          <Link to={"/signin"} className={cx("sign-in")}>
            <p>Login</p>
          </Link>
        )}
      </div>
    </div>
  );
}
export default Header;
