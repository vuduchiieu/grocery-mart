import img from "~/assets/img";

const address = localStorage.getItem("addresses");
const addressLocal = address ? JSON.parse(address) : [];

const detailed = addressLocal.length > 0 ? addressLocal[0].detailed : "";
const state = addressLocal.length > 0 ? addressLocal[0].state : "";
const dc = addressLocal.length > 0 ? addressLocal[0].dc : "";
const town = addressLocal.length > 0 ? addressLocal[0].town : "";

const userData = {
    detailed: detailed,
    town: town,
    state: state,
    dc: dc,
    avatar: img.avatar,
};
export { userData };
