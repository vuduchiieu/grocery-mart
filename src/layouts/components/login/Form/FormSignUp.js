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

    const [errEmail, setErrEmail] = useState("");
    const [errPassWord, setErrPassWord] = useState("");
    const [errCfPassWord, setErrCfPassWord] = useState("");
    const [errFullName, setErrFullName] = useState("");
    const [errPhoneNumber, setPhoneNumber] = useState("");

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    const isValidPassword = (password) => {
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
        return passwordRegex.test(password);
    };

    const [existingUsers, setExistingUsers] = useState([]);

    const fetchExistingUsers = async () => {
        try {
            const response = await axios.get(
                "https://be-jyl9.onrender.com/api/v1/users"
            );
            setExistingUsers(response.data.data);
        } catch (error) {
            console.error("Error fetching existing users:", error);
        }
    };

    useEffect(() => {
        fetchExistingUsers();
    }, []);

    const handleCreateUser = async () => {
        if (!existingUsers || existingUsers.length === 0) {
            await fetchExistingUsers();
        }
        const isEmailExist =
            existingUsers &&
            existingUsers.some((user) => user.email === newUser.email);

        if (isEmailExist) {
            alert("This email has been registered, please log in");
            navigate("/signin");
            return;
        }

        if (!isValidEmail(newUser.email)) {
            setErrEmail("Invalid email");
            return;
        }

        if (!isValidPassword(newUser.passWord)) {
            setErrPassWord(
                "Password must contain at least one number and one capital letter"
            );
            return;
        }

        if (newUser.passWord !== newUser.cfPassWord) {
            setErrCfPassWord("Password must match");
            return;
        }
        if (!newUser.fullName.trim()) {
            setErrFullName("Invalid name");
            return;
        }

        if (
            !newUser.phoneNumber.trim() ||
            newUser.phoneNumber.trim().length < 9
        ) {
            setPhoneNumber("Phone number is at least 9 digits");
            return;
        }
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
                <div className={cx("error")}>
                    <p>{errEmail}</p>
                </div>
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
                <div className={cx("error")}>
                    <p>{errPassWord}</p>
                </div>
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
                <div className={cx("error")}>
                    <p>{errCfPassWord}</p>
                </div>
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
                <div
                    className={cx("error")}
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        height: 20,
                    }}
                >
                    <p>{errFullName}</p>
                    <p>{errPhoneNumber}</p>
                </div>

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
