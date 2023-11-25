import classNames from "classnames/bind";
import styles from "./contentNav.module.scss";
import icon from "~/assets/icon";
import { useState } from "react";
import { userData } from "~/components/userData/userData";
import { useForm } from "react-hook-form";
import { useAppContext } from "~/components/Context/AppContext";

const cx = classNames.bind(styles);

function PersonalInfo({ personal, setPersonal }) {
    const { setName, name, setPhone, phone } = useAppContext();
    const { register, handleSubmit, setValue } = useForm();
    const [showPassword, setShowPassword] = useState(false);

    const handleBack = () => {
        setPersonal(!personal);
    };
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleInputChange = (e) => {
        if (e.target.value.length > 10) {
            setValue("phone", e.target.value.substring(0, 10));
        }
    };

    const onSubmit = (data) => {
        const userData = {
            name: data.name,
            phone: data.phone,
        };
        setName(userData.name);
        setPhone(userData.phone);
        let userProfile = [];
        userProfile.push(userData);
        localStorage.setItem("userProfile", JSON.stringify(userProfile));
        handleBack();
    };

    return (
        <div className={cx("content-nav")}>
            <div className={cx("title")}>
                <img onClick={handleBack} src={icon.back} />
                <h3>Personal info</h3>
            </div>
            <form className={cx("form")} onSubmit={handleSubmit(onSubmit)}>
                <div className={cx("wrap")}>
                    <div className={cx("first-input")}>
                        <h4>Full name</h4>
                        <input
                            type="text"
                            defaultValue={name || userData.name}
                            placeholder="Imran Khan"
                            {...register("name")}
                        />
                    </div>
                    <div className={cx("second-input")}>
                        <h4>Email address</h4>
                        <input
                            type="text"
                            placeholder="Email"
                            defaultValue={userData.email}
                        />
                    </div>
                    <div className={cx("third-input")}>
                        <h4>Phone number</h4>
                        <input
                            type="number"
                            defaultValue={phone || userData.phone}
                            placeholder="+008 01234 56789"
                            {...register("phone")}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className={cx("fourth-input")}>
                        <h4>Password</h4>
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            defaultValue={userData.passWord}
                        />
                        <label>
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
                    </div>
                    <button type="submit" className={cx("save")}>
                        Save Edit
                    </button>
                </div>
            </form>
            <button onClick={handleBack} className={cx("cancel")}>
                Cancel
            </button>
        </div>
    );
}

export default PersonalInfo;
