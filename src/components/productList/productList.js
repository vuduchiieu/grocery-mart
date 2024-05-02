import icon from "~/assets/icon";
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

const TotalLavAzza = [
  {
    id: 1,
    img: img.coffeeBeansEspresso,
    reaction: icon.heart,
    desc: "Coffee Beans - Espresso Arabica and Robusta Beans",
    productName: "Coffee Beans Espresso",
    title: "Lavazza",
    prevPrice: 47.99,
    price: 43.19,
    rating: 4.3,
    to: "/product/coffeeBeans",
  },
  {
    id: 2,
    img: img.lavazzaCoffeeBlends,
    reaction: icon.heart,
    desc: "Lavazza Coffee Blends - Try the Italian Espresso",
    productName: "Lavazza Coffee Blends",
    title: "Lavazza",
    prevPrice: 53.99,
    price: 48.59,
    rating: 3.4,
    to: "/product/lavazzaCoffeeBlends",
  },
  {
    id: 3,
    img: img.lavazzaCaffèEspresso,
    reaction: icon.heart,
    desc: "Lavazza - Caffè Espresso Black Tin - Ground coffee",
    productName: "Caffè Espresso Black",
    title: "welikecoffee",
    prevPrice: 99.99,
    price: 89.99,
    rating: 5.0,
    to: "/product/lavazzaCaffèEspresso",
  },
  {
    id: 4,
    img: img.qualitàOro,
    reaction: icon.heart,
    desc: "Qualità Oro Mountain Grown - Espresso Coffee Beans",
    productName: "Qualità Oro Mountain",
    title: "Lavazza",
    prevPrice: 38.99,
    price: 35.09,
    rating: 4.4,
    to: "/product/qualitàOro",
  },
];

const products = JSON.parse(localStorage.getItem("products")) || [];

export { BROWSE_CATEGPRIES, products, TotalLavAzza };
