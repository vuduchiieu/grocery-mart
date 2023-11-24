import icon from "~/assets/icon";
import StorageInformation from "./StorageInformation";
import styles from "./reviewProduct.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
function Review() {
    return (
        <div className={cx("riview")}>
            {StorageInformation.map((item, i) => (
                <div key={i} className={cx("peoples-rating")}>
                    <div className={cx("people")}>
                        <img src={item.avatar} />
                        <div className={cx("information")}>
                            <p className={cx("name")}>{item.name}</p>
                            <p className={cx("comment")}>{item.comment}</p>
                        </div>
                    </div>
                    <div className={cx("start-review")}>
                        <img src={icon.startOfPeople} />
                        <p>(3.5) Review</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Review;
