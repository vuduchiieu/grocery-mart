import axios from "axios";
import { jwtDecode } from "jwt-decode";
import {
  loginFailed,
  loginStart,
  loginSuccess,
  logoutFailed,
  logoutStart,
  logoutSuccess,
  registerFailed,
  registerStart,
  registerSuccess,
  updateUserSuccess,
} from "./authSlide";

const loginUser = async (user, dispatch, navigate) => {
  dispatch(loginStart());
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API}/v1/auth/login`,
      user
    );
    const decodedToken = jwtDecode(res.data);
    dispatch(loginSuccess(decodedToken.user));
    navigate("/");
  } catch (error) {
    alert(`Đăng nhập thất bại: ${error.response?.data}`);
    dispatch(loginFailed());
  }
};

const registerUser = async (user, dispatch, navigate) => {
  dispatch(registerStart());
  try {
    await axios.post(`${process.env.REACT_APP_API}/v1/auth/register`, user);
    dispatch(registerSuccess());
    loginUser(user, dispatch, navigate);
    navigate("/");
  } catch (error) {
    alert(`Đăng ký thất bại: ${error?.response.data}`);
    dispatch(registerFailed());
  }
};

const logoutUser = async (dispatch, navigate) => {
  dispatch(logoutStart());
  try {
    dispatch(logoutSuccess());
    navigate("/");
  } catch (error) {
    dispatch(logoutFailed());
  }
};

const updateUser = async (
  newUser,
  user,
  dispatch,
  handleBack,
  setIsLoading
) => {
  setIsLoading(true);
  try {
    const res = await axios.put(
      `${process.env.REACT_APP_API}/v1/user/${user._id || user.id}`,
      newUser
    );
    const decodedToken = jwtDecode(res.data);
    dispatch(updateUserSuccess(decodedToken.user));
    setIsLoading(false);
    handleBack();
  } catch (error) {
    console.log(error);
    setIsLoading(false);
  }
};
export { loginUser, registerUser, logoutUser, updateUser };
