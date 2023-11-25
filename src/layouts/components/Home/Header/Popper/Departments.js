import Tippy from "@tippyjs/react/headless";
import icon from "~/assets/icon";
import styles from "./popper.module.scss";
import classNames from "classnames/bind";
import AllDepartments from "./AllDepartments/AllDepartments";
const cx = classNames.bind(styles);

function Departments() {
    return (
        <Tippy
            interactive
            placement="bottom"
            render={(attrs) => (
                <div
                    className={cx("popper")}
                    tabIndex="-1"
                    {...attrs}
                    style={{ right: "-924px " }}
                >
                    <img
                        className={cx("arrow")}
                        style={{ left: "345px" }}
                        src={icon.polygon}
                    />
                    <div className={cx("wrap-list-popper")}>
                        <div className={cx("list-popper")}>
                            <div className={cx("wrap")}>
                                <img src={icon.allDepartments} />
                                <h2>All Departments</h2>
                            </div>
                            <div className={cx("children-popper")}>
                                <AllDepartments />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        >
            <button>
                Departments
                <img src={icon.arrowDown} />
            </button>
        </Tippy>
    );
}

export default Departments;
