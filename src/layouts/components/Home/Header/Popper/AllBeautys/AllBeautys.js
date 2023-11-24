import classNames from "classnames/bind";
import styles from "./allBeautys.module.scss";
import icon from "~/assets/icon";

import TrendingInBeauty from "./TrendingInBeauty";
import BakeryBread from "./BakeryBread";
import CommunitiesToSupport from "./CommunitiesToSupport";
import PremiumBeauty from "./PremiumBeauty";
import Beauty from "./Beauty";
import FeaturedShops from "./FeaturedShops";

const cx = classNames.bind(styles);

const LIST_BEAUTYS = [
    {
        title: "Featured Shops",
        icon: icon.grocery,
        children: <FeaturedShops />,
    },
    {
        title: "Trending in Beauty",
        icon: icon.trendingInBeauty,
        children: <TrendingInBeauty />,
    },
    {
        title: "Featured Brands",
        icon: icon.featuredBrands,
        children: <BakeryBread />,
    },
    {
        title: "Communities to Support",
        icon: icon.communitiesToSupport,
        children: <CommunitiesToSupport />,
    },
    {
        title: "Premium Beauty",
        icon: icon.premiumBeauty,
        children: <PremiumBeauty />,
    },
    {
        title: "Beauty",
        icon: icon.beauty,
        children: <Beauty />,
    },
];

function renderMenu(beautys) {
    return (
        <div className={cx("list-beautys")}>
            {beautys.map((beautys, i) => (
                <div
                    key={i}
                    className={cx({
                        LIST_BEAUTYS: beautys.children || beautys.subMenu,
                    })}
                >
                    <div className={cx("wrap-title")}>
                        <img src={beautys.icon} />
                        <p className={cx("title")}>{beautys.title}</p>
                    </div>
                    <div className={cx("children")}>
                        {beautys.children || beautys.subMenu}
                    </div>
                </div>
            ))}
        </div>
    );
}

function AllBeautys() {
    return renderMenu(LIST_BEAUTYS);
}

export default AllBeautys;
