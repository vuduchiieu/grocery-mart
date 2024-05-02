import classNames from "classnames/bind";
import styles from "./contentNav.module.scss";
import icon from "~/assets/icon";
import { useAppContext } from "~/components/Context/AppContext";

const cx = classNames.bind(styles);
function List({ lists, setLists }) {
  const { listHeart, updateCartItem } = useAppContext();
  const handleBack = () => {
    setLists(!lists);
  };
  return (
    <div className={cx("content-nav")} style={{ height: 860 }}>
      <div className={cx("title")}>
        <img onClick={handleBack} src={icon.back} alt="" />
        <h3>Lists</h3>
      </div>
      <div className={cx("lists")}>
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
  );
}

export default List;
