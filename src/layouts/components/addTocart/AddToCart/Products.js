import classNames from "classnames/bind";
import styles from "./addToCart.module.scss";
import icon from "~/assets/icon";
import { products } from "~/components/productList/productList";
import { useAppContext } from "~/components/Context/AppContext";

const cx = classNames.bind(styles);

function Products() {
    const { removeCartItem, updateCartItem, listHeart } = useAppContext();

    const uniqueProducts = Array.from(
        new Set(products.map((item) => item.productName))
    )
        .map((productName) =>
            products.find((item) => item.productName === productName)
        )
        .sort((a, b) => a.id - b.id);

    const productQuantities = {};
    products.forEach((item) => {
        if (productQuantities[item.id]) {
            productQuantities[item.id]++;
        } else {
            productQuantities[item.id] = 1;
        }
    });

    const removeAllCartItem = (item) => {};

    return (
        <div className={cx("products")}>
            {uniqueProducts.map((item, i) => (
                <div key={i} className={cx("product")}>
                    <img src={item.img} />
                    <div className={cx("profile-product")}>
                        <div className={cx("desc-price")}>
                            <h2>{item.desc}</h2>
                            <p>${item.price}</p>
                        </div>
                        <div className={cx("stock-price")}>
                            <p>${item.price}</p>
                            <p>In Stock</p>
                        </div>
                        <div className={cx("option")}>
                            <div className={cx("select")}>
                                <select>
                                    <option>LavAzza</option>
                                </select>
                                <div className={cx("up-down")}>
                                    <button
                                        onClick={() => {
                                            removeCartItem(item);
                                        }}
                                    >
                                        <img src={icon.btnReduce} />
                                    </button>
                                    <p>{productQuantities[item.id]}</p>
                                    <button
                                        onClick={() => updateCartItem(item)}
                                    >
                                        <img src={icon.btnAdd} />
                                    </button>
                                </div>
                            </div>
                            <div className={cx("heart-delete")}>
                                <div className={cx("heart")}>
                                    <img src={item.reaction} />
                                    <p>Save</p>
                                </div>
                                <div className={cx("delete")}>
                                    <img src={icon.delete} />
                                    <button
                                        onClick={() => {
                                            removeAllCartItem(item);
                                        }}
                                    >
                                        <p> Delete</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Products;
