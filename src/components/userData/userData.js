import img from "~/assets/img";

const userDataLocalString = localStorage.getItem("userData");
const userDatalocal = userDataLocalString
    ? JSON.parse(userDataLocalString)
    : [];

const email = userDatalocal.length > 0 ? userDatalocal[0].email : "";
const passWord = userDatalocal.length > 0 ? userDatalocal[0].password : "";

const userProfile = localStorage.getItem("userProfile");
const userProfilelocal = userProfile ? JSON.parse(userProfile) : [];

const name = userProfilelocal.length > 0 ? userProfilelocal[0].name : "";
const phone = userProfilelocal.length > 0 ? userProfilelocal[0].phone : "";

const address = localStorage.getItem("addresses");
const addressLocal = address ? JSON.parse(address) : [];

const detailed = addressLocal.length > 0 ? addressLocal[0].detailed : "";
const state = addressLocal.length > 0 ? addressLocal[0].state : "";
const dc = addressLocal.length > 0 ? addressLocal[0].dc : "";
const town = addressLocal.length > 0 ? addressLocal[0].town : "";

const userData = {
    name: name,
    phone: phone,
    detailed: detailed,
    town: town,
    state: state,
    dc: dc,
    avatar: img.avatar,
    email: email,
    passWord: passWord,
};
export { userData };
