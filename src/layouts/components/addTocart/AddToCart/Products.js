import classNames from "classnames/bind";
import styles from "./addToCart.module.scss";
import icon from "~/assets/icon";
import { useAppContext } from "~/components/Context/AppContext";

const cx = classNames.bind(styles);

function Products() {
  const {
    removeCartItem,
    updateCartItem,
    uniqueProducts,
    productQuantities,
    clearCartItem,
  } = useAppContext();

  return (
    <div className={cx("products")}>
      {uniqueProducts.map((item, i) => (
        <div key={i} className={cx("product")}>
          <img src={item.img} alt="" />
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
                    <img src={icon.btnReduce} alt="" />
                  </button>
                  <p>{productQuantities[item.id]}</p>
                  <button onClick={() => updateCartItem(item)}>
                    <img src={icon.btnAdd} alt="" />
                  </button>
                </div>
              </div>
              <div className={cx("heart-delete")}>
                <div className={cx("heart")}>
                  <img src={item.reaction} alt="" />
                  <p>Save</p>
                </div>
                <div className={cx("delete")}>
                  <img src={icon.delete} alt="" />
                  <button
                    onClick={() => {
                      clearCartItem(item);
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
