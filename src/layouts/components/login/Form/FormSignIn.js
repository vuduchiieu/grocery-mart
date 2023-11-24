import { useForm } from "react-hook-form";
import classNames from "classnames/bind";
import styles from "./formLogin.module.scss";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "~/components/Context/AppContext";

const cx = classNames.bind(styles);

function FormSignIn() {
    const { setLogin } = useContext(AppContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { handleSubmit } = useForm();
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    const handleLogin = () => {
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

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const onSubmit = (data) => {};

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={cx("wrap-form")}>
                <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
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
                <button className={cx("button")} onClick={handleLogin}>
                    Login
                </button>
            </div>
        </form>
    );
}

export default FormSignIn;
