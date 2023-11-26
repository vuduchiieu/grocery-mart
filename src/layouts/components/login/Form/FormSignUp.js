import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";

import classNames from "classnames/bind";
import styles from "./formLogin.module.scss";
import { useContext, useState } from "react";
import icon from "~/assets/icon";
import { AppContext } from "~/components/Context/AppContext";

const cx = classNames.bind(styles);

function FormSignUp() {
    const { setLogin, setEmail, setpassWord } = useContext(AppContext);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [check, setCheck] = useState(false);
    const schema = yup.object().shape({
        email: yup
            .string()
            .required("Invalid email")
            .matches(
                /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/,
                "Invalid email"
            ),
        password: yup
            .string()
            .required("Invalid password")
            .matches(
                /^(?=.*\d)(?=.*[A-Z]).*$/,
                "Password must contain at least one number and one capital letter"
            ),
        confirmPassword: yup
            .string()
            .oneOf([yup.ref("password"), null], "Password must match"),
    });
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

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

    const onSubmit = (data) => {
        const userData = {
            email: data.email,
            password: data.password,
        };
        const existingData = localStorage.getItem("userData");
        let allUsers = [];
        if (existingData) {
            allUsers = JSON.parse(existingData);
            const existingUser = allUsers.find(
                (user) => user.email === userData.email
            );
            if (existingUser) {
                alert("This email has been registered, please log in");
                navigate("/signin");
                return;
            }
        }
        allUsers.push(userData);
        localStorage.setItem("userData", JSON.stringify(allUsers));
        setEmail(userData.email);
        setpassWord(userData.password);
        localStorage.setItem("login", "true");
        setLogin(true);
        navigate("/");
    };
    return (
        <div className={cx("sign-up")}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input {...register("email")} placeholder="Email" />
                    <img
                        className={cx("icon-email")}
                        src={icon.emailIcon}
                        alt=""
                    />
                    <div className={cx("error")}>
                        {errors.email && (
                            <p className={cx("error-message")}>
                                {errors.email.message}
                            </p>
                        )}
                    </div>
                    <input
                        {...register("password")}
                        placeholder="Password"
                        type={showPassword ? "text" : "password"}
                    />
                    <div className={cx("error")}>
                        {errors.password && (
                            <p className={cx("error-message")}>
                                {errors.password.message}
                            </p>
                        )}
                    </div>
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
                    <input
                        {...register("confirmPassword", {
                            required: "This field is required",
                        })}
                        placeholder="Confirm Password"
                        type={showConfirmPassword ? "text" : "password"}
                    />
                    <div className={cx("error")} style={{ height: 20 }}>
                        {errors.confirmPassword && (
                            <p className={cx("error-message")}>
                                {errors.confirmPassword.message}
                            </p>
                        )}
                    </div>
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

export default FormSignUp;
