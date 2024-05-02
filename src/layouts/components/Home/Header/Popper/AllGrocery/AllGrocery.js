import styles from "./allGrocery.module.scss";
import classNames from "classnames/bind";
import icon from "~/assets/icon";

import Grocery from "./Grocery";
import FreshProduce from "./FreshProduce";
import BakeryBread from "./BakeryBread";
import Frozen from "./Frozen";
import Snacks from "./Snacks";
import Candy from "./Candy";
import CocktailsMixesCoffee from "./CocktailsMixesCoffee";
import Beverages from "./Beverages";

const cx = classNames.bind(styles);

const LIST_GROCERY = [
  {
    title: "Grocery",
    icon: icon.grocery,
    children: <Grocery />,
  },
  {
    title: "Fresh Produce",
    icon: icon.freshProduce,
    children: <FreshProduce />,
  },
  {
    title: "Bakery & Bread",
    icon: icon.bakeryBread,
    children: <BakeryBread />,
  },
  {
    title: "Frozen",
    icon: icon.frozen,
    children: <Frozen />,
  },
  {
    title: "Snacks",
    icon: icon.snacks,
    children: <Snacks />,
  },
  {
    title: "Candy",
    icon: icon.candy,
    children: <Candy />,
  },
  {
    title: "Cocktails & Mixes Coffee",
    icon: icon.cocktailsMixesCoffee,
    children: <CocktailsMixesCoffee />,
  },
  {
    title: "Beverages",
    icon: icon.beverages,
    children: <Beverages />,
  },
];

function renderMenu(grocery) {
  return (
    <div className={cx("list-grocery")}>
      {grocery.map((grocery, i) => (
        <div
          key={i}
          className={cx({
            LIST_GROCERY: grocery.children || grocery.subMenu,
          })}
        >
          <div className={cx("wrap-title")}>
            <img src={grocery.icon} alt="" />
            <p className={cx("title")}>{grocery.title}</p>
          </div>
          <div className={cx("children")}>
            {grocery.children || grocery.subMenu}
          </div>
        </div>
      ))}
    </div>
  );
}

function AllGrocery() {
  return renderMenu(LIST_GROCERY);
}

export default AllGrocery;
