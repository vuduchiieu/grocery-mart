import icon from "~/assets/icon";
import StorageInformation from "./StorageInformation";
import styles from "./reviewProduct.module.scss";
import classNames from "classnames/bind";
import { useState } from "react";
import Review from "./Review";
import img from "~/assets/img";
const cx = classNames.bind(styles);

function RiviewProduct() {
    const [review, setReview] = useState(true);
    const [description, setDescription] = useState(false);
    const [features, setFeatures] = useState(false);
    const [similar, setSimilar] = useState(false);
    return (
        <div className={cx("review-product")}>
            <div className={cx("nav-bar")}>
                <button
                    className={description ? cx("active") : ""}
                    onClick={() => {
                        setDescription(!description);
                        setReview(false);
                        setFeatures(false);
                        setSimilar(false);
                    }}
                >
                    Description
                </button>
                <button
                    className={features ? cx("active") : ""}
                    onClick={() => {
                        setFeatures(!features);
                        setDescription(false);
                        setReview(false);
                        setSimilar(false);
                    }}
                >
                    Features
                </button>
                <button
                    className={review ? cx("active") : ""}
                    onClick={() => {
                        setReview(!review);
                        setDescription(false);
                        setFeatures(false);
                        setSimilar(false);
                    }}
                >
                    Review (1100)
                </button>
                <button
                    className={similar ? cx("active") : ""}
                    onClick={() => {
                        setSimilar(!similar);
                        setDescription(false);
                        setFeatures(false);
                        setReview(false);
                    }}
                >
                    Similar
                </button>
            </div>
            <div className={cx("wrap")}>
                {review && <h2>What our customers are saying</h2>}
                {review === true ? (
                    <Review />
                ) : (
                    <p className={cx("coming-soon")}>coming soon.......</p>
                )}
            </div>
        </div>
    );
}

export default RiviewProduct;
