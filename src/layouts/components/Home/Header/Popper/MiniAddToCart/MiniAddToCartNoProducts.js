import Tippy from "@tippyjs/react/headless";
import icon from "~/assets/icon";
import img from "~/assets/img";
import styles from "./miniAddToCart.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);

function MiniAddToCartNoProducts() {
  return (
    <Tippy
      interactive
      placement="bottom"
      render={(attrs) => (
        <div className={cx("products")} tabIndex="-1" {...attrs}>
          <img className={cx("arrow")} src={icon.polygon} alt="" />
          <h3 className={cx("title")}>You have 0 item</h3>
          <img className={cx("no-products")} src={img.noAddToCart} alt="" />
        </div>
      )}
    >
      <Link to={"/addtocart"} className={cx("wrap-cart-amount")}>
        <div className={cx("cart")}>
          <img src={icon.cart} alt="" />
        </div>
        <div className={cx("total-amount")}>
          <p>$0</p>
        </div>
      </Link>
    </Tippy>
  );
}

export default MiniAddToCartNoProducts;
