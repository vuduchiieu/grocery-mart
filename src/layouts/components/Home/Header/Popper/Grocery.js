import Tippy from "@tippyjs/react/headless";
import icon from "~/assets/icon";
import styles from "./popper.module.scss";
import classNames from "classnames/bind";
import AllGrocery from "./AllGrocery/AllGrocery";
const cx = classNames.bind(styles);

function Grocery() {
    return (
        <Tippy
            interactive
            placement="bottom"
            render={(attrs) => (
                <div
                    className={cx("popper")}
                    style={{ right: "-800px " }}
                    tabIndex="-1"
                    {...attrs}
                >
                    <img
                        className={cx("arrow")}
                        style={{ left: "455px" }}
                        src={icon.polygon}
                    />
                    <div className={cx("wrap-list-popper")}>
                        <div className={cx("list-popper")}>
                            <div className={cx("children-popper")}>
                                <AllGrocery />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        >
            <button>
                Grocery
                <img src={icon.arrowDown} />
            </button>
        </Tippy>
    );
}

export default Grocery;
