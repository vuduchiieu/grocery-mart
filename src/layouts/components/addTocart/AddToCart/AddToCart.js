import Header from "~/layouts/components/Home/Header/Header";
import classNames from "classnames/bind";
import styles from "./addToCart.module.scss";
import icon from "~/assets/icon";
import { products } from "~/components/productList/productList";
import img from "~/assets/img";
import { Link } from "react-router-dom";
import Products from "./Products";
import { useAppContext } from "~/components/Context/AppContext";
import { useState } from "react";
import PaymentMethod from "./PaymentMethod/PaymentMethod";
const cx = classNames.bind(styles);

function AddToCart() {
    const { totalPrice } = useAppContext();
    const [forward, setForward] = useState(false);

    const handleForward = () => {
        products.length > 0 && setForward(!forward);
    };
    return (
        <div>
            <Header />
            {forward === true ? (
                <PaymentMethod
                    forward={forward}
                    setForward={setForward}
                    handleForward={handleForward}
                />
            ) : (
                <div className={cx("add-to-cart")}>
                    <div>
                        <div className={cx("link-to")}>
                            <p>Home</p>
                            <img src={icon.arrowRight} />
                            <p>checkout</p>
                        </div>

                        <div className={cx("main")}>
                            <div className={cx("cart")}>
                                <div className={cx("list-product")}>
                                    {products.length > 0 ? (
                                        <Products />
                                    ) : (
                                        <div className={cx("no-products")}>
                                            <img src={img.noAddToCart} />
                                        </div>
                                    )}
                                </div>
                                <div className={cx("price-product")}>
                                    <Link
                                        to={"/"}
                                        className={cx("continue-shopping")}
                                    >
                                        <img src={icon.arrowLeft} />
                                        <p>Continue Shopping</p>
                                    </Link>

                                    <div className={cx("price")}>
                                        <div className={cx("subtotal")}>
                                            <p>Subtotal:</p>
                                            <p>${totalPrice}</p>
                                        </div>
                                        <div className={cx("shipping")}>
                                            <p>Shipping:</p>
                                            <p>
                                                {totalPrice > 0
                                                    ? "$10.00"
                                                    : "$0"}
                                            </p>
                                        </div>
                                        <div className={cx("total")}>
                                            <p>Total:</p>
                                            <p>
                                                $
                                                {totalPrice > 0
                                                    ? totalPrice + 10
                                                    : 0}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={cx("wrap")}>
                                <div className={cx("continue-to-checkout")}>
                                    <div className={cx("subtotal")}>
                                        <p>
                                            Subtotal <span>(items)</span>
                                        </p>
                                        <p>{products.length}</p>
                                    </div>
                                    <div className={cx("price")}>
                                        <p>
                                            Price <span>(Total)</span>
                                        </p>
                                        <p>${totalPrice}</p>
                                    </div>
                                    <div className={cx("shipping")}>
                                        <p>Shipping</p>
                                        <p>
                                            {totalPrice > 0 ? "$10.00" : "$0"}
                                        </p>
                                    </div>
                                    <div className={cx("estimated-total")}>
                                        <p>Estimated Total</p>
                                        <p>
                                            $
                                            {totalPrice > 0
                                                ? totalPrice + 10
                                                : 0}
                                        </p>
                                    </div>
                                    <button
                                        style={
                                            products.length === 0
                                                ? {
                                                      backgroundColor:
                                                          "#F6F6F6",
                                                      cursor: "default",
                                                      opacity: 1,
                                                  }
                                                : {}
                                        }
                                        onClick={handleForward}
                                        className={cx("Continue-to-checkout")}
                                    >
                                        Continue to checkout
                                    </button>
                                </div>
                                <div className={cx("gift")}>
                                    <div className={cx("git-icon")}>
                                        <img src={icon.giftAddToCart} />
                                    </div>
                                    <div className={cx("send-gift")}>
                                        <p>Send this order as a gift.</p>
                                        <p>
                                            Available items will be shipped to
                                            your gift recipient.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default AddToCart;
