import styles from "./totalLavAzza1320.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import icon from "~/assets/icon";
import { useAppContext } from "~/components/Context/AppContext";
import Filter from "./Filter/Filter";
const cx = classNames.bind(styles);

function TotalLavAzza1320() {
    const { lavAzzaItems, handleReactionClick } = useAppContext();

    return (
        <div className={cx("total-lavAzza-1320")}>
            <div className={cx("title")}>
                <h2>Total LavAzza 1320</h2>
                <Filter />
            </div>
            <div className={cx("list-lavAzza")}>
                {lavAzzaItems.map((item, i) => (
                    <div className={cx("wrap")} key={i}>
                        <Link to={item.to} className={cx("img-product")}>
                            <img src={item.img} />
                        </Link>

                        <button className={cx("reaction")}>
                            <img
                                src={item.reaction}
                                onClick={() => handleReactionClick(i)}
                            />
                        </button>

                        <div className={cx("wrap-info")}>
                            <h3>{item.desc}</h3>
                            <p className={cx("title")}>{item.title}</p>
                            <div className={cx("warp-price-start")}>
                                <p>${item.prevPrice}</p>
                                <div className={cx("ratting")}>
                                    <img src={icon.star} />
                                    <p>{item.rating}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TotalLavAzza1320;
