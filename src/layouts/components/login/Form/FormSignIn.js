import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "~/components/Context/AppContext";
import icon from "~/assets/icon";
import classNames from "classnames/bind";
import styles from "./formLogin.module.scss";
import axios from "axios";

const cx = classNames.bind(styles);

function FormSignIn() {
    const { setLogin, setIdApi } = useContext(AppContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [check, setCheck] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };
    const toggleCheck = () => {
        setCheck(!check);
    };
    const handleLogin = async () => {
        try {
            const response = await axios.get(
                "https://be-sieutaphoa.vercel.app/api/v1/users"
            );
            const apiData = response.data.data;

            const foundUser = apiData.find(
                (user) => user.email === email && user.passWord === password
            );

            if (foundUser) {
                localStorage.setItem("idApi", foundUser.id);
                localStorage.setItem("login", "true");
                setIdApi(foundUser.id);
                setLogin(true);
                navigate("/");
            } else {
                alert("Login information is incorrect");
                setLogin(false);
            }
        } catch (error) {
            console.error("Error fetching data from API:", error.message);
        }
    };

    return (
        <div className={cx("login")}>
            <div className={cx("form")}>
                <div>
                    <input
                        required
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => {
                            if (!e.target.value.includes(" ")) {
                                setEmail(e.target.value);
                            }
                        }}
                    />
                    <img
                        className={cx("icon-email")}
                        src={icon.emailIcon}
                        alt=""
                    />
                    <div className={cx("error")}></div>
                    <input
                        required
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        value={password}
                        onChange={(e) => {
                            if (!e.target.value.includes(" ")) {
                                setPassword(e.target.value);
                            }
                        }}
                    />
                    <div className={cx("error")} style={{ height: 20 }}></div>
                    <label className={cx("password")}>
                        {showPassword === true ? (
                            <img src={icon.unlock} />
                        ) : (
                            <img src={icon.lock} />
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
                <button onClick={handleLogin} className={cx("button")}>
                    <p>Login</p>
                </button>
            </div>
            <button className={cx("loginWithGG")}>
                <img src={icon.google} alt="" />
                <p>Sign in with Gmail</p>
            </button>
        </div>
    );
}

export default FormSignIn;
