import styles from "./totalLavAzza1320.module.scss";
import classNames from "classnames/bind";
import { Link, useNavigate } from "react-router-dom";
import icon from "~/assets/icon";
import { useAppContext } from "~/components/Context/AppContext";
import Filter from "./Filter/Filter";
const cx = classNames.bind(styles);

function TotalLavAzza1320() {
  const { lavAzzaItems, setListHeart, user, setLavAzzaItems } = useAppContext();
  const navigate = useNavigate();

  const handleReactionClick = (i) => {
    if (!!user) {
      const updatedLavAzzaItems = [...lavAzzaItems];
      updatedLavAzzaItems[i].reaction =
        updatedLavAzzaItems[i].reaction === icon.heart
          ? icon.heartActive
          : icon.heart;
      setLavAzzaItems(updatedLavAzzaItems);
      const likedItems = updatedLavAzzaItems.filter(
        (item) => item.reaction === icon.heartActive
      );
      localStorage.setItem("likedItems", JSON.stringify(likedItems));
      setListHeart(likedItems);
    } else {
      navigate("/signin");
    }
  };

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
              <img src={item.img} alt="" />
            </Link>
            <button className={cx("reaction")}>
              <img
                src={item.reaction}
                alt=""
                onClick={() => handleReactionClick(i)}
              />
            </button>
            <div className={cx("wrap-info")}>
              <Link className={cx("desc")} to={item.to}>
                {item.desc}
              </Link>
              <p className={cx("title")}>{item.title}</p>
              <div className={cx("warp-price-start")}>
                <p>${item.prevPrice}</p>
                <div className={cx("ratting")}>
                  <img src={icon.star} alt="" />
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
