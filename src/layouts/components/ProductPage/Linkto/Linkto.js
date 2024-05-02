import icon from "~/assets/icon";
import styles from "./Linkto.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

function Linkto(props) {
  const { productId } = props;
  return (
    <div className={cx("link-to")}>
      <div className={cx("departments")}>
        <p>Grocery</p>
        <img src={icon.arrowRight} alt="" />
      </div>
      <div className={cx("lavAzza")}>
        <p>Beverages</p>
        <img src={icon.arrowRight} alt="" />
      </div>
      <div className={cx("product")}>
        <p>{productId}</p>
      </div>
    </div>
  );
}

export default Linkto;
