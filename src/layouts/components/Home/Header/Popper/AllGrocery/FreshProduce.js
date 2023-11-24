const FRESH_PRODUCE = [
    { title: "Shop All" },
    { title: "Celebrate Salad Month" },
    { title: "Healthy Living" },
    { title: "Fresh Flowers" },
    { title: "Chilled Dressing" },
    { title: "Fresh Fruit" },
    { title: "Salad Kits & Bowls" },
    { title: "Organic Produce" },
    { title: "Fresh Vegetables" },
];

function FreshProduce() {
    return (
        <>
            {FRESH_PRODUCE.map((item, i) => (
                <li key={i}>{item.title}</li>
            ))}
        </>
    );
}

export default FreshProduce;
