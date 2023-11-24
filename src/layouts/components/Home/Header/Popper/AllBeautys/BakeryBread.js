const BAKERY_BREAD = [
    { title: "Shop All" },
    { title: "New in Bakery" },
    { title: "Sliced Bread" },
    { title: "Rolls & Buns" },
    { title: "Tortillas" },
    { title: "Breakfast Breads" },
    { title: "Pies" },
    { title: "Cookies & Brownies" },
];

function BakeryBread() {
    return (
        <>
            {BAKERY_BREAD.map((item, i) => (
                <li key={i}>{item.title}</li>
            ))}
        </>
    );
}

export default BakeryBread;
