import icon from "~/assets/icon";
import img from "~/assets/img";
import styles from "./headContent.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

function HeadContent() {
  return (
    <div className={cx("content")}>
      <div className={cx("head-content")}>
        <h1>ORDER YOUR FAVORITE COFFEE</h1>
        <div className={cx("img")}>
          <img className={cx("background")} src={icon.background} alt="" />
          <img
            className={cx("vector-background")}
            src={icon.vectorBackground}
            alt=""
          />
          <img className={cx("package")} src={img.cafeFugaz} alt="" />
          <img className={cx("glass")} src={img.glass} alt="" />
        </div>
      </div>
    </div>
  );
}

export default HeadContent;
