import classNames from "classnames/bind";
import styles from "./paymentMethod.module.scss";
import icon from "~/assets/icon";
import { useState } from "react";
import { userData } from "~/components/userData/userData";
import { products } from "~/components/productList/productList";
import img from "~/assets/img";
import { useAppContext } from "~/components/Context/AppContext";
import { useNavigate } from "react-router-dom";
const cx = classNames.bind(styles);

function PaymentMethod({ forward, handleForward, setForward }) {
    const { totalPrice, setPersonal, setAddresses } = useAppContext();
    const { name, phone, detailed, town, state, dc } = useAppContext();
    const navigate = useNavigate();

    const [tick, setTick] = useState(true);
    const [tick2, setTick2] = useState(true);
    const [tick3, setTick3] = useState(false);

    const names = name || userData.name;
    const phones = phone || userData.phone;
    const detaileds = detailed || userData.detailed;
    const towns = town || userData.town;
    const states = state || userData.state;
    const dcs = dc || userData.dc;

    const handlePay = () => {
        if (
            names !== "" &&
            phones !== "" &&
            detaileds !== "" &&
            towns !== "" &&
            states !== "" &&
            dcs !== ""
        ) {
            if (window.confirm("Payment confirmation")) {
                alert("Payment success");
                products.splice(0, products.length);
                localStorage.removeItem("products");
                navigate("/");
            }
        } else {
            alert(
                `you need to set up: ${names === "" ? "Name, " : ""}${
                    phones === "" ? "Phone, " : ""
                }${detailed === "" ? "Detailed, " : ""}${
                    towns === "" ? "Town, " : ""
                }${states === "" ? "State, " : ""}${dcs === "" ? "Dc" : ""}`
            );
            navigate("/profile");
            if (names === "" || phones === "") {
                setPersonal(true);
            } else if (
                detaileds === "" ||
                towns === "" ||
                states === "" ||
                dcs === ""
            ) {
                setAddresses(true);
            }
        }
    };

    const handleEdit = () => {
        navigate("/profile");
        if (names === "" || phones === "") {
            setPersonal(true);
        } else if (
            detaileds === "" ||
            towns === "" ||
            states === "" ||
            dcs === ""
        ) {
            setAddresses(true);
        }
    };
    const calculateDeliveryDates = () => {
        const currentDate = new Date();
        const deliveryStartDate = new Date(
            currentDate.getTime() + 2 * 24 * 60 * 60 * 1000
        );
        const deliveryEndDate = new Date(
            deliveryStartDate.getTime() + 7 * 24 * 60 * 60 * 1000
        );

        return {
            start: deliveryStartDate.toLocaleDateString("en-US", {
                weekday: "short",
                month: "short",
                day: "numeric",
            }),
            end: deliveryEndDate.toLocaleDateString("en-US", {
                weekday: "short",
                month: "short",
                day: "numeric",
            }),
        };
    };
    const deliveryDates = calculateDeliveryDates();

    return (
        <div className={cx("payment-method")}>
            <div>
                <div className={cx("link-to")}>
                    <p>Home</p>
                    <img src={icon.arrowRight} />
                    <p
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                            handleForward(setForward(!forward));
                        }}
                    >
                        checkout
                    </p>
                    <img src={icon.arrowRight} />
                    <p>Payment method</p>
                </div>

                <div className={cx("main")}>
                    <div className={cx("shipping")}>
                        <div className={cx("shipping-arrives")}>
                            <div className={cx("title")}>
                                <h2>
                                    1. Shipping, arrives between{" "}
                                    {deliveryDates.start} to {deliveryDates.end}
                                </h2>
                                <button onClick={handleEdit}>
                                    <img src={icon.edit} alt="" />
                                    <p>Edit</p>
                                </button>
                            </div>
                            <div className={cx("address")}>
                                <div>
                                    <h3>{name || userData.name}</h3>
                                    <p>
                                        <span>
                                            {detailed || userData.detailed}
                                        </span>
                                        , <span>{town || userData.town}</span>,{" "}
                                        <span>{state || userData.state}</span>,{" "}
                                        <span>{dc || userData.dc}</span>
                                    </p>
                                </div>
                                <img
                                    onClick={() => setTick(!tick)}
                                    src={
                                        tick === true
                                            ? icon.tickActive
                                            : icon.tick
                                    }
                                />
                            </div>
                            <div className={cx("shipping")}>
                                <h3>Items details</h3>
                                <p>{products.length} items</p>
                            </div>
                        </div>
                        <div className={cx("shipping-method")}>
                            <h2>2. Shipping method</h2>
                            <p className={cx("availeble")}>
                                Availeble Shipping method
                            </p>
                            <div className={cx("delivery")}>
                                <img src={img.fedex} alt="" />
                                <div className={cx("delivery")}>
                                    <h4>Fedex Delivery</h4>
                                    <p>Delivery: 2-3 days work</p>
                                </div>
                                <div className={cx("price")}>
                                    <p
                                        style={
                                            tick2 === true
                                                ? { color: "#1a162e" }
                                                : { color: "#9E9DA8" }
                                        }
                                    >
                                        $10.00
                                    </p>
                                    <img
                                        onClick={() => {
                                            setTick2(!tick2);
                                            setTick3(false);
                                        }}
                                        src={
                                            tick2 === true
                                                ? icon.tickActive
                                                : icon.tick
                                        }
                                    />
                                </div>
                            </div>
                            <div className={cx("delivery")}>
                                <img src={img.dhl} />
                                <div className={cx("delivery")}>
                                    <h4>DHL Delivery</h4>
                                    <p>Delivery: 1-2 days work</p>
                                </div>
                                <div className={cx("price")}>
                                    <p
                                        style={
                                            tick3 === true
                                                ? { color: "#1a162e" }
                                                : { color: "#9E9DA8" }
                                        }
                                    >
                                        $12.00
                                    </p>
                                    <img
                                        onClick={() => {
                                            setTick3(!tick3);
                                            setTick2(false);
                                        }}
                                        src={
                                            tick3 === true
                                                ? icon.tickActive
                                                : icon.tick
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx("payment-details")}>
                        <h2>Payment Details</h2>
                        <p className={cx("desc")}>
                            Complete your purchase item by providing your
                            payment details order.
                        </p>
                        <div className={cx("input")}>
                            <div>
                                <h3>Email Address</h3>
                                <input
                                    type="text"
                                    placeholder="example@gmail.com"
                                />
                            </div>
                            <div>
                                <h3>Card Holder</h3>
                                <input
                                    type="text"
                                    placeholder="example@gmail.com"
                                />
                            </div>
                            <div>
                                <h3>Card Details</h3>
                                <input
                                    type="text"
                                    placeholder="example@gmail.com"
                                />
                                <div className={cx("date")}>
                                    <input type="text" placeholder="MM/YY" />
                                    <input type="text" placeholder="CVC" />
                                </div>
                            </div>
                        </div>
                        <div className={cx("price")}>
                            <div>
                                <p>
                                    Subtotal <span>(items)</span>
                                </p>
                                <p>{products.length}</p>
                            </div>
                            <div>
                                <p>
                                    Price <span>(Total)</span>
                                </p>
                                <p>${totalPrice}</p>
                            </div>
                            <div>
                                <p>Shipping</p>
                                <p>{tick3 === true ? "$12.00" : "$10.00"}</p>
                            </div>
                            <div>
                                <p>Estimated Total</p>
                                <p>
                                    $
                                    {tick3 === true
                                        ? totalPrice + 12
                                        : totalPrice + 10}
                                </p>
                            </div>
                        </div>
                        <button onClick={handlePay}>
                            <p>
                                Pay $
                                {tick3 === true
                                    ? totalPrice + 12
                                    : totalPrice + 10}
                            </p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PaymentMethod;
