import styles from "./browseCategories.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { BROWSE_CATEGPRIES } from "~/components/productList/productList";
const cx = classNames.bind(styles);

function BrowseCategories() {
    return (
        <div className={cx("browse-categories")}>
            <h2>Browse Categories</h2>
            <div className={cx("list-categories")}>
                {BROWSE_CATEGPRIES.map((item, i) => (
                    <Link className={cx("categories")} to={item.to} key={i}>
                        <img src={item.img} />
                        <div>
                            <p>{item.price}</p>
                            <p>{item.desc}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default BrowseCategories;
