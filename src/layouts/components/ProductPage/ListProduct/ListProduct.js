import { useContext, useState } from "react";
import { AppContext } from "~/components/Context/AppContext";
import styles from "./listProduct.module.scss";
import classNames from "classnames/bind";
import icon from "~/assets/icon";
const cx = classNames.bind(styles);

function ListProduct({ productData }) {
    const { updateCartItem } = useContext(AppContext);
    const [selectedSize, setSelectedSize] = useState("200g");

    return (
        <div className={cx("main")}>
            <div className={cx("img-product")}>
                <img src={productData.img} alt="" />
            </div>
            <div className={cx("profile-product")}>
                <h2>{productData.desc}</h2>
                <div className={cx("wrap")}>
                    <div className={cx("rating-size")}>
                        <div className={cx("rating")}>
                            <img src={icon.star} />
                            <p>({productData.rating}) 1100 reviews</p>
                        </div>
                        <div className={cx("size-weight")}>
                            <h3>Size/Weight</h3>
                            <div className={cx("select-size-weight")}>
                                <select
                                    value={selectedSize}
                                    onChange={(e) => {
                                        setSelectedSize(e.target.value);
                                    }}
                                >
                                    <option>200g</option>
                                    <option>500g</option>
                                    <option>700g</option>
                                </select>
                                <select>
                                    <option>Gram</option>
                                </select>
                            </div>
                            <div className={cx("btn-size-weight")}>
                                <button
                                    onClick={() => {
                                        setSelectedSize("200g");
                                    }}
                                    className={
                                        selectedSize === "200g"
                                            ? cx("active")
                                            : ""
                                    }
                                >
                                    Small
                                </button>
                                <button
                                    onClick={() => {
                                        setSelectedSize("500g");
                                    }}
                                    className={
                                        selectedSize === "500g"
                                            ? cx("active")
                                            : ""
                                    }
                                >
                                    Medium
                                </button>
                                <button
                                    onClick={() => {
                                        setSelectedSize("700g");
                                    }}
                                    className={
                                        selectedSize === "700g"
                                            ? cx("active")
                                            : ""
                                    }
                                >
                                    Large
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={cx("shipping-price")}>
                        <div className={cx("shipping")}>
                            <div className={cx("compare")}>
                                <img src={icon.document} />
                                <h4>Compare</h4>
                            </div>
                            <div className={cx("delivery")}>
                                <img src={icon.cart} />
                                <div className="title-delivery">
                                    <h4>Delivery</h4>
                                    <p>From $6 for 1-3 days</p>
                                </div>
                            </div>
                            <div className={cx("pickup")}>
                                <img src={icon.bag} />
                                <div className={cx("title-pickup")}>
                                    <h4>Pickup</h4>
                                    <p>Out of 2 store, today</p>
                                </div>
                            </div>
                        </div>
                        <div className={cx("adtocart-price")}>
                            <div className={cx("price")}>
                                <div className={cx("wrap-price")}>
                                    <p className={cx("initial-price")}>
                                        ${productData.prevPrice}
                                    </p>
                                    <p className={cx("discount")}>10%</p>
                                </div>
                                <p className={cx("price-discount")}>
                                    ${(productData.price * 0.9).toFixed(2)}
                                </p>
                            </div>
                            <div className={cx("add-to-cart")}>
                                <button
                                    onClick={() => updateCartItem(productData)}
                                >
                                    Add to cart
                                </button>
                                <img src={productData.reaction} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListProduct;
