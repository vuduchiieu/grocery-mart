import Tippy from "@tippyjs/react/headless";
import icon from "~/assets/icon";
import styles from "./miniAddToCart.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import { useAppContext } from "~/components/Context/AppContext";
import { products } from "~/components/productList/productList";

const cx = classNames.bind(styles);

function MiniAddToCart() {
    const { totalPrice, uniqueProducts, productQuantities } = useAppContext();
    return (
        <Tippy
            interactive
            placement="bottom"
            render={(attrs) => (
                <div className={cx("products")} tabIndex="-1" {...attrs}>
                    <img className={cx("arrow")} src={icon.polygon} />
                    <h3 className={cx("title")}>
                        You have {products.length} item
                    </h3>
                    <div className={cx("lists-products")}>
                        {uniqueProducts.map((item, i) => (
                            <div key={i} className={cx("product")}>
                                <img src={item.img} />
                                <p className={cx("productName")}>
                                    {item.productName}
                                </p>
                                <div className={cx("wrap")}>
                                    <p className={cx("price")}>${item.price}</p>
                                    <p className={cx("quantity")}>
                                        {productQuantities[item.id]}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className={cx("pay")}>
                        <div className={cx("subtotal")}>
                            <p>Subtotal:</p>
                            <p>${totalPrice}</p>
                        </div>
                        <div className={cx("texes")}>
                            <p>Texes:</p>
                            <p>Free</p>
                        </div>
                        <div className={cx("shipping")}>
                            <p>Shipping</p>
                            <p>$10.00</p>
                        </div>
                        <div className={cx("total-price")}>
                            <p>Total Price</p>
                            <p>${totalPrice + 10}</p>
                        </div>
                    </div>
                    <div className={cx("checkOutAll")}>
                        <Link to={"/addtocart"}>
                            <p>Check Out All</p>
                        </Link>
                    </div>
                </div>
            )}
        >
            <Link to={"/addtocart"} className={cx("wrap-cart-amount")}>
                <div className={cx("cart")}>
                    <img src={icon.cart} />
                    <span>{products.length}</span>
                </div>
                <div className={cx("total-amount")}>
                    <p>${totalPrice}</p>
                </div>
            </Link>
        </Tippy>
    );
}

export default MiniAddToCart;
