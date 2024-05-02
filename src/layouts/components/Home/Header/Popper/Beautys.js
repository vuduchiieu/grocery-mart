import Tippy from "@tippyjs/react/headless";
import icon from "~/assets/icon";
import styles from "./popper.module.scss";
import classNames from "classnames/bind";
import AllBeautys from "./AllBeautys/AllBeautys";
const cx = classNames.bind(styles);

function Beauty() {
  return (
    <Tippy
      interactive
      placement="bottom"
      render={(attrs) => (
        <div
          className={cx("popper")}
          style={{ right: "-691px " }}
          tabIndex="-1"
          {...attrs}
        >
          <img
            className={cx("arrow")}
            style={{ left: "570px" }}
            src={icon.polygon}
            alt=""
          />
          <div className={cx("wrap-list-popper")}>
            <div className={cx("list-popper")}>
              <div className={cx("children-popper")}>
                <AllBeautys />
              </div>
            </div>
          </div>
        </div>
      )}
    >
      <button>
        Beauty
        <img src={icon.arrowDown} alt="" />
      </button>
    </Tippy>
  );
}

export default Beauty;
