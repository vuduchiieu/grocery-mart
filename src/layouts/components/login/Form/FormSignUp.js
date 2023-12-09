import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import axios from "axios";

import classNames from "classnames/bind";
import styles from "./formLogin.module.scss";
import { useContext, useEffect, useState } from "react";
import icon from "~/assets/icon";
import { AppContext } from "~/components/Context/AppContext";

const cx = classNames.bind(styles);

function FormSignUp() {
    const [users, setUsers] = useState([]);
    const [newUser, setNewUser] = useState({
        fullName: "",
        email: "",
        phoneNumber: "",
        passWord: "",
        cfPassWord: "",
    });

    const { setLogin, setEmail, setpassWord } = useContext(AppContext);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [check, setCheck] = useState(false);

    const navigate = useNavigate();

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };
    const toggleShowConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    const toggleCheck = () => {
        setCheck(!check);
    };
    useEffect(() => {
        axios
            .get("https://be-jyl9.onrender.com/api/v1/users")
            .then((response) => setUsers(response.data.data))
            .catch((error) => console.error("Error fetching users:", error));
    }, []);
    const handleCreateUser = () => {
        axios
            .post("https://be-jyl9.onrender.com/api/v1/create", newUser)
            .then(() => {
                axios
                    .get("https://be-jyl9.onrender.com/api/v1/users")
                    .then((response) => console.log(response.data))
                    .catch((error) =>
                        console.error("Error fetching users:", error)
                    );
                setEmail(newUser.email);
                setpassWord(newUser.passWord);
                localStorage.setItem("login", "true");
                setLogin(true);
                navigate("/");
                setNewUser({
                    fullName: "",
                    email: "",
                    phoneNumber: "",
                    passWord: "",
                    cfPassWord: "",
                });
            })
            .catch((error) => console.error("Error creating user:", error));
    };

    return (
        <div className={cx("sign-up")}>
            <div className={cx("form")}>
                <input
                    type="text"
                    placeholder="Email"
                    value={newUser.email}
                    onChange={(e) =>
                        setNewUser({ ...newUser, email: e.target.value })
                    }
                />
                <img className={cx("icon-email")} src={icon.emailIcon} alt="" />
                <div className={cx("error")}></div>
                <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={newUser.passWord}
                    onChange={(e) =>
                        setNewUser({ ...newUser, passWord: e.target.value })
                    }
                />
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
                <div className={cx("error")}></div>
                <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm Password"
                    value={newUser.cfPassWord}
                    onChange={(e) =>
                        setNewUser({ ...newUser, cfPassWord: e.target.value })
                    }
                />
                <label className={cx("confirm-password")}>
                    {showConfirmPassword === true ? (
                        <img src={icon.unlock} />
                    ) : (
                        <img src={icon.lock} />
                    )}
                    <input
                        type="checkbox"
                        checked={showConfirmPassword}
                        onChange={toggleShowConfirmPassword}
                    />
                </label>
                <div className={cx("error")}></div>
                <input
                    className={cx("full-name")}
                    type="text"
                    placeholder="Full Name"
                    value={newUser.fullName}
                    onChange={(e) =>
                        setNewUser({ ...newUser, fullName: e.target.value })
                    }
                />
                <input
                    className={cx("phone-number")}
                    type="text"
                    placeholder="Phone Number"
                    value={newUser.phoneNumber}
                    onChange={(e) =>
                        setNewUser({ ...newUser, phoneNumber: e.target.value })
                    }
                />

                <button className={cx("button")} onClick={handleCreateUser}>
                    <p>Sign Up</p>
                </button>
            </div>

            <button className={cx("loginWithGG")}>
                <img src={icon.google} alt="" />
                <p>Sign in with Gmail</p>
            </button>
        </div>
    );
}

export default FormSignUp;
