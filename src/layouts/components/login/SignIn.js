import classNames from "classnames/bind";
import styles from "./login.module.scss";
import { Link } from "react-router-dom";

import img from "~/assets/img";
import icon from "~/assets/icon";
import FormSignIn from "./Form/FormSignIn";

const cx = classNames.bind(styles);

function SignIn() {
    return (
        <div className={cx("login")}>
            <div className={cx("banner")}>
                <img src={img.bannerLogin} />
                <p>
                    The best of luxury brand values, high quality products, and
                    innovative services
                </p>
            </div>
            <div className={cx("children-login")}>
                <div className={cx("wrap")}>
                    <Link to={"/"} className={cx("logo")}>
                        <img src={icon.logo} />
                        <h1>siêuTạpHóa</h1>
                    </Link>
                    <div className={cx("title")}>
                        <h3>Hello Again!</h3>
                        <p>
                            Welcome back to sign in. As a returning customer,
                            you have access to your previously saved all
                            information.
                        </p>
                    </div>
                    <div className={cx("form")}>
                        <FormSignIn />
                    </div>
                    <div className={cx("account-yet")}>
                        <p>Don’t have an account yet?</p>
                        <Link to={"/signup"} className={cx("link-submit")}>
                            Sign Up
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
