import icon from "~/assets/icon";
import styles from "./filter.module.scss";
import classNames from "classnames/bind";
import { useEffect, useRef, useState } from "react";

const cx = classNames.bind(styles);

function Filter() {
    const [filter, setFilter] = useState(false);
    const filterRef = useRef(null);
    const [selectedSize, setSelectedSize] = useState("200g");
    const [seachBrand, setSeachBrand] = useState("lavazza");

    const handleModuleFilter = () => {
        setFilter(!filter);
        window.scrollTo(0, 999);
    };

    const handleClickOutside = (event) => {
        if (filterRef.current && !filterRef.current.contains(event.target)) {
            setFilter(false);
        }
    };

    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.key === "Escape") {
                setFilter(false);
            }
        };
        document.addEventListener("keydown", handleKeyPress);
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("keydown", handleKeyPress);
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);
    return (
        <>
            <div className={cx("filter", { active: filter })} ref={filterRef}>
                <button className={cx("module")} onClick={handleModuleFilter}>
                    <p>Filter</p>
                    <img src={icon.filter} />
                </button>
                {filter && (
                    <div className={cx("module-filter")}>
                        <img className={cx("arrow")} src={icon.polygon} />
                        <h2>Filter</h2>
                        <div className={cx("main")}>
                            <div className={cx("price")}>
                                <h3>Price</h3>
                                <input
                                    className={cx("slider")}
                                    type="range"
                                ></input>
                                <div className={cx("wrap")}>
                                    <div className={cx("minimum")}>
                                        <p>Minimum</p>
                                        <input defaultValue={"$30.00"} />
                                    </div>
                                    <div className={cx("maximum")}>
                                        <p>Maximum</p>
                                        <input defaultValue={"$100.00"} />
                                    </div>
                                </div>
                            </div>
                            <div className={cx("size-weight")}>
                                <h3>Size/Weight</h3>
                                <div className={cx("select-size-weight")}>
                                    <select
                                        value={selectedSize}
                                        onChange={(e) => {
                                            setSelectedSize(e.target.value);
                                        }}
                                    >
                                        <option>200g</option>
                                        <option>500g</option>
                                        <option>700g</option>
                                    </select>
                                    <select>
                                        <option>Gram</option>
                                    </select>
                                </div>
                                <div className={cx("btn-size-weight")}>
                                    <button
                                        onClick={() => {
                                            setSelectedSize("200g");
                                        }}
                                        className={
                                            selectedSize === "200g"
                                                ? cx("active")
                                                : ""
                                        }
                                    >
                                        Small
                                    </button>
                                    <button
                                        onClick={() => {
                                            setSelectedSize("500g");
                                        }}
                                        className={
                                            selectedSize === "500g"
                                                ? cx("active")
                                                : ""
                                        }
                                    >
                                        Medium
                                    </button>
                                    <button
                                        onClick={() => {
                                            setSelectedSize("700g");
                                        }}
                                        className={
                                            selectedSize === "700g"
                                                ? cx("active")
                                                : ""
                                        }
                                    >
                                        Large
                                    </button>
                                </div>
                            </div>
                            <div className={cx("brand")}>
                                <h3>Brand</h3>
                                <input
                                    onChange={(e) => {
                                        setSeachBrand(e.target.value);
                                    }}
                                    value={seachBrand}
                                    className={cx("search-brand")}
                                    type={!!seachBrand && "search"}
                                    placeholder="Search brand name"
                                />
                                {!seachBrand && <img src={icon.search} />}
                                <div className={cx("btn-brand")}>
                                    <button
                                        onClick={() => {
                                            setSeachBrand("lavazza");
                                        }}
                                        className={
                                            seachBrand === "lavazza"
                                                ? cx("active")
                                                : ""
                                        }
                                    >
                                        Lavazza
                                    </button>
                                    <button
                                        onClick={() => {
                                            setSeachBrand("nescafe");
                                        }}
                                        className={
                                            seachBrand === "nescafe"
                                                ? cx("active")
                                                : ""
                                        }
                                    >
                                        Nescafe
                                    </button>
                                    <button
                                        onClick={() => {
                                            setSeachBrand("starbucks");
                                        }}
                                        className={
                                            seachBrand === "starbucks"
                                                ? cx("active")
                                                : ""
                                        }
                                    >
                                        Starbucks
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className={cx("action")}>
                            <button
                                className={cx("cancel")}
                                onClick={handleModuleFilter}
                            >
                                Cancel
                            </button>
                            <button
                                className={cx("show-result")}
                                onClick={handleModuleFilter}
                            >
                                Show Result
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default Filter;
