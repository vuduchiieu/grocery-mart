import classNames from "classnames/bind";
import styles from "./contentNav.module.scss";
import icon from "~/assets/icon";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useAppContext } from "~/components/Context/AppContext";
import axios from "axios";

const cx = classNames.bind(styles);

function PersonalInfo({ personal, setPersonal }) {
    const { setName, setPhone, idApi } = useAppContext();
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

    const [users, setUsers] = useState([]);
    useEffect(() => {
        if (idApi) {
            axios
                .get(`https://be-jyl9.onrender.com/api/v1/user/${idApi}`)
                .then((response) => {
                    setUsers(response.data.data);
                })
                .catch((error) =>
                    console.error("Lỗi khi lấy dữ liệu người dùng:", error)
                );
        }
    }, [idApi]);

    const onSubmit = (data) => {
        handleBack();
    };

    return (
        <div className={cx("content-nav")}>
            <div className={cx("title")}>
                <img onClick={handleBack} src={icon.back} />
                <h3>Personal info</h3>
            </div>
            {users.map((item, i) => (
                <form
                    key={i}
                    className={cx("form")}
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className={cx("wrap")}>
                        <div className={cx("first-input")}>
                            <h4>Full name</h4>
                            <input
                                type="text"
                                defaultValue={item.fullName}
                                placeholder="Imran Khan"
                                {...register("name")}
                            />
                        </div>
                        <div className={cx("second-input")}>
                            <h4>Email address</h4>
                            <input
                                type="text"
                                placeholder="Email"
                                defaultValue={item.email}
                            />
                        </div>
                        <div className={cx("third-input")}>
                            <h4>Phone number</h4>
                            <input
                                type="text"
                                defaultValue={parseInt(item.phoneNumber)}
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
                                defaultValue={item.passWord}
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
            ))}

            <button onClick={handleBack} className={cx("cancel")}>
                Cancel
            </button>
        </div>
    );
}

export default PersonalInfo;
