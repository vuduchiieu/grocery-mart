import classNames from "classnames/bind";
import styles from "./contentNav.module.scss";
import icon from "~/assets/icon";
import { useEffect, useState } from "react";
import { useAppContext } from "~/components/Context/AppContext";
import axios from "axios";

const cx = classNames.bind(styles);

function PersonalInfo({ personal, setPersonal }) {
    const { idApi } = useAppContext();

    const handleBack = () => {
        setPersonal(!personal);
    };
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const [showPassword, setShowPassword] = useState(false);

    const [users, setUsers] = useState([]);

    const [newUser, setNewUser] = useState({
        fullName: "",
        email: "",
        phoneNumber: "",
        passWord: "",
        id: idApi,
    });

    useEffect(() => {
        if (users.length > 0) {
            setNewUser(() => ({
                ...newUser,
                fullName: users[0].fullName,
                email: users[0].email,
                phoneNumber: users[0].phoneNumber,
                passWord: users[0].passWord,
            }));
        }
    }, [users]);

    const [errEmail, setErrEmail] = useState("");
    const [errPassWord, setErrPassWord] = useState("");
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

    const handleUpdate = async () => {
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

        if (!newUser.fullName.trim()) {
            setErrFullName("Invalid name");
            return;
        }

        if (newUser.phoneNumber.trim().length < 9) {
            setPhoneNumber("Phone number is at least 9 digits");
            return;
        }
        try {
            await axios.put(
                `https://be-jyl9.onrender.com/api/v1/update`,
                newUser
            );
            window.location.href = "/profile";
        } catch (error) {
            console.error("Error updating user data:", error);
        }
    };

    return (
        <div className={cx("content-nav")}>
            <div className={cx("title")}>
                <img onClick={handleBack} src={icon.back} />
                <h3>Personal info</h3>
            </div>
            {users.map((item, i) => (
                <div key={i} className={cx("form")}>
                    <div className={cx("wrap")}>
                        <div className={cx("first-input")}>
                            <h4>Full name</h4>
                            <input
                                type="text"
                                defaultValue={item.fullName}
                                placeholder="Imran Khan"
                                onChange={(e) =>
                                    setNewUser({
                                        ...newUser,
                                        fullName: e.target.value,
                                    })
                                }
                            />
                            <div className={cx("error")}>
                                <p>{errFullName}</p>
                            </div>
                        </div>
                        <div className={cx("second-input")}>
                            <h4>Email address</h4>
                            <input
                                type="text"
                                placeholder="Email"
                                defaultValue={item.email}
                                onChange={(e) =>
                                    setNewUser({
                                        ...newUser,
                                        email: e.target.value,
                                    })
                                }
                            />
                            <div className={cx("error")}>
                                <p>{errEmail}</p>
                            </div>
                        </div>
                        <div className={cx("third-input")}>
                            <h4>Phone number</h4>
                            <input
                                type="text"
                                defaultValue={item.phoneNumber}
                                placeholder="+008 01234 56789"
                                onChange={(e) =>
                                    setNewUser({
                                        ...newUser,
                                        phoneNumber: e.target.value,
                                    })
                                }
                            />
                            <div className={cx("error")}>
                                <p>{errPhoneNumber}</p>
                            </div>
                        </div>
                        <div className={cx("fourth-input")}>
                            <h4>Password</h4>
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                defaultValue={item.passWord}
                                onChange={(e) =>
                                    setNewUser({
                                        ...newUser,
                                        passWord: e.target.value,
                                    })
                                }
                            />
                            <div className={cx("error")}>
                                <p>{errPassWord}</p>
                            </div>
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
                        <button onClick={handleUpdate} className={cx("save")}>
                            Save edit
                        </button>
                    </div>
                </div>
            ))}

            <button onClick={handleBack} className={cx("cancel")}>
                Cancel
            </button>
        </div>
    );
}

export default PersonalInfo;
