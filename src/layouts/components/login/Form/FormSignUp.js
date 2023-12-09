import { useNavigate } from "react-router-dom";
import axios from "axios";

import classNames from "classnames/bind";
import styles from "./formLogin.module.scss";
import { useEffect, useState } from "react";
import icon from "~/assets/icon";

const cx = classNames.bind(styles);

function FormSignUp() {
    const [newUser, setNewUser] = useState({
        fullName: "",
        email: "",
        phoneNumber: "",
        passWord: "",
        cfPassWord: "",
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const navigate = useNavigate();

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };
    const toggleShowConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    const handleCreateUser = async () => {
        try {
            await axios.post(
                "https://be-jyl9.onrender.com/api/v1/create",
                newUser
            );
            navigate("/signin");
            setNewUser({
                fullName: "",
                email: "",
                phoneNumber: "",
                passWord: "",
                cfPassWord: "",
            });
        } catch (error) {
            console.error("Error creating user:", error);
        }
    };

    return (
        <div className={cx("sign-up")}>
            <div className={cx("form")}>
                <input
                    type="email"
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
                    type="number"
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
