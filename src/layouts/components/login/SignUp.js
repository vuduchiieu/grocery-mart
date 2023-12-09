import classNames from "classnames/bind";
import styles from "./login.module.scss";
import { Link } from "react-router-dom";

import img from "~/assets/img";
import icon from "~/assets/icon";
import FormSignUp from "./Form/FormSignUp";

const cx = classNames.bind(styles);

function SignUp() {
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
                        <h1>siêuTapHóa</h1>
                    </Link>
                    <div className={cx("title")}>
                        <h3>Sign Up</h3>
                        <p>
                            Let’s create your account and Shop like a pro and
                            save money.
                        </p>
                    </div>
                    <div className={cx("form")}>
                        <FormSignUp />
                    </div>
                    <div className={cx("account-yet")}>
                        <p>You have an account yet?</p>
                        <Link to={"/signin"} className={cx("link-submit")}>
                            Login
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
