import { useForm } from "react-hook-form";
import classNames from "classnames/bind";
import styles from "./formLogin.module.scss";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "~/components/Context/AppContext";
import icon from "~/assets/icon";

const cx = classNames.bind(styles);

function FormSignIn() {
    const { setLogin } = useContext(AppContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [check, setCheck] = useState(false);
    const { handleSubmit } = useForm();
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };
    const toggleCheck = () => {
        setCheck(!check);
    };

    const onSubmit = (data) => {
        const storedUserData = localStorage.getItem("userData");
        const userData = JSON.parse(storedUserData);

        if (Array.isArray(userData) && userData.length > 0) {
            const foundUser = userData.find(
                (user) => user.email === email && user.password === password
            );

            if (foundUser) {
                localStorage.setItem("login", "true");
                setLogin(true);
                navigate("/");
            } else {
                alert("Login information is incorrect");
                setLogin(false);
            }
        } else {
            alert("Account does not exist");
            setLogin(false);
        }
    };

    return (
        <div className={cx("login")}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <img
                        className={cx("icon-email")}
                        src={icon.emailIcon}
                        alt=""
                    />
                    <div className={cx("error")}></div>
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className={cx("error")} style={{ height: 20 }}></div>
                    <label className={cx("password")}>
                        {showPassword === true ? (
                            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yk/r/swFqSxKYa5M.png" />
                        ) : (
                            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yZ/r/je5FEJkU1_K.png" />
                        )}
                        <input
                            type="checkbox"
                            checked={showPassword}
                            onChange={toggleShowPassword}
                        />
                    </label>
                    <div className={cx("recovery")}>
                        <label>
                            {check === true ? (
                                <img src={icon.check} />
                            ) : (
                                <img src={icon.noCheck} />
                            )}
                            <p>Set as default card</p>
                            <input
                                type="checkbox"
                                checked={check}
                                onChange={toggleCheck}
                            />
                        </label>
                        <Link to="" className={cx("recovery-password")}>
                            Recovery Password
                        </Link>
                    </div>
                </div>
                <button className={cx("button")}>
                    <p>Sign Up</p>
                </button>
            </form>
            <button className={cx("loginWithGG")}>
                <img src={icon.google} alt="" />
                <p>Sign in with Gmail</p>
            </button>
        </div>
    );
}

export default FormSignIn;
