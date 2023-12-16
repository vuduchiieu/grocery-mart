import img from "~/assets/img";
const BROWSE_CATEGPRIES = [
    {
        img: img.newSumatra,
        price: "$24 - $150",
        desc: "New sumatra mandeling coffe blend",
        to: "",
    },
    {
        img: img.espressoArabica,
        price: "$37 - $160",
        desc: "Espresso arabica and robusta beans",
        to: "",
    },
    {
        img: img.LavazzaTopClass,
        price: "$32 - $160",
        desc: "Lavazza top class whole bean coffee blend",
        to: "/",
    },
];

const products = JSON.parse(localStorage.getItem("products")) || [];

export { BROWSE_CATEGPRIES, products };
