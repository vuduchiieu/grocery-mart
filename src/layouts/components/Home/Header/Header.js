import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "~/components/Context/AppContext";
import classNames from "classnames/bind";
import styles from "./header.module.scss";

import icon from "~/assets/icon";
import Departments from "./Popper/Departments";
import Grocery from "./Popper/Grocery";
import Beauty from "./Popper/Beautys";
import MiniAddToCartNoProducts from "./Popper/MiniAddToCart/MiniAddToCartNoProducts";
import MiniAddToCart from "./Popper/MiniAddToCart/MiniAddToCart";

import { products } from "~/components/productList/productList";
import img from "~/assets/img";
import { useState } from "react";

const cx = classNames.bind(styles);

function Header() {
    const { listHeart, login, avatar, setLists } = useAppContext();
    const [seach, setSeach] = useState(false);
    const navigate = useNavigate();
    const handleForward = () => {
        setLists(true);
        navigate("/profile");
    };
    return (
        <div className={cx("wrap-header")}>
            <div className={cx("header")}>
                <Link to={"/"} className={cx("logo")}>
                    <img src={icon.logo} />
                    <h1>grocerymart</h1>
                </Link>
                <div
                    className={cx("nav-bar")}
                    style={seach === true ? { marginRight: 20 } : {}}
                >
                    <div className={cx("departments")}>
                        <Departments />
                    </div>
                    <div className={cx("grocery")}>
                        <Grocery />
                    </div>
                    <div className={cx("beauty")}>
                        <Beauty />
                    </div>
                </div>
                {login === true ? (
                    <div className={cx("action")}>
                        <div className={cx("search")}>
                            {seach && (
                                <input
                                    type="text"
                                    placeholder="Search for item"
                                />
                            )}
                            <img
                                onClick={() => {
                                    setSeach(!seach);
                                }}
                                src={icon.search}
                            />
                        </div>
                        <div className={cx("wrap-rct")}>
                            <div
                                onClick={handleForward}
                                className={cx("reaction")}
                            >
                                <img src={icon.heartNonActive} />
                                <p>{listHeart.length}</p>
                            </div>
                            {products.length > 0 ? (
                                <MiniAddToCart />
                            ) : (
                                <MiniAddToCartNoProducts />
                            )}
                        </div>
                        <Link to={"/profile"} className={cx("avatar")}>
                            {avatar === undefined ? (
                                <img src={img.avatar} />
                            ) : (
                                <img src={avatar.review} />
                            )}
                        </Link>
                    </div>
                ) : (
                    <Link to={"/signin"} className={cx("sign-in")}>
                        <p>Login</p>
                    </Link>
                )}
            </div>
        </div>
    );
}
export default Header;
