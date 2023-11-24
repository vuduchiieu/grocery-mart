import Electronics from "./Electronics";
import styles from "./AllDepartments.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

const LIST_DEPARTMENTS = [
    {
        title: "Savings & Featured Shops",
    },
    {
        title: "Electronics",
        children: <Electronics />,
    },
    {
        title: "Clothing, Shoes & Accessories",
    },
    {
        title: "Home, Furniture & Appliances",
    },
    {
        title: "Toys & Video Games",
    },
    {
        title: "Home Improvement",
    },
    {
        title: "Baby",
    },
    {
        title: "Household Essentials",
    },
    {
        title: "Personal Care",
    },
    {
        title: "Patio & Garden",
    },
    {
        title: "Sports & Outdoors",
    },
    {
        title: "Gift Cards",
    },
    {
        title: "Auto, Tires and Industrial",
    },
    {
        title: "Movies, Music & Books",
    },
];

function renderMenu(departments) {
    return (
        <>
            {departments.map((department, i) => (
                <div
                    key={i}
                    className={cx({
                        listDepartment:
                            department.children || department.subMenu,
                    })}
                >
                    {department.title}
                    <div className={cx("list-electronics")}>
                        {department.children || department.subMenu}
                    </div>
                </div>
            ))}
        </>
    );
}

function AllDepartments() {
    return renderMenu(LIST_DEPARTMENTS);
}

export default AllDepartments;
