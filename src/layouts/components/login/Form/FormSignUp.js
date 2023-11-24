import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

import classNames from "classnames/bind";
import styles from "./formLogin.module.scss";
import { useState } from "react";

const cx = classNames.bind(styles);

function FormSignUp() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
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
        alert(`Sign Up Success: ${userData.email}`);
        navigate("/signin");
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={cx("wrap-form")}>
                <input {...register("email")} placeholder="Email" />
                {errors.email && (
                    <p className={cx("error-message")}>
                        {errors.email.message}
                    </p>
                )}
                <input
                    {...register("password")}
                    placeholder="Password"
                    type={showPassword ? "text" : "password"}
                />
                {errors.password && (
                    <p className={cx("error-message")}>
                        {errors.password.message}
                    </p>
                )}
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

                <input
                    {...register("confirmPassword", {
                        required: "This field is required",
                    })}
                    placeholder="Confirm Password"
                    type={showConfirmPassword ? "text" : "password"}
                />
                {errors.confirmPassword && (
                    <p className={cx("error-message")}>
                        {errors.confirmPassword.message}
                    </p>
                )}
                <label className={cx("confirm-password")}>
                    {showConfirmPassword === true ? (
                        <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yk/r/swFqSxKYa5M.png" />
                    ) : (
                        <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yZ/r/je5FEJkU1_K.png" />
                    )}
                    <input
                        type="checkbox"
                        checked={showConfirmPassword}
                        onChange={toggleShowConfirmPassword}
                    />
                </label>
            </div>
            <button className={cx("button")}>Sign Up</button>
        </form>
    );
}

export default FormSignUp;
