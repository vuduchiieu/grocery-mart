const GROCERY = [
    { title: "Shop All" },
    { title: "Grilling Foods" },
    { title: "Spring Flavors" },
];

function Grocery() {
    return (
        <>
            {GROCERY.map((item, i) => (
                <li key={i}>{item.title}</li>
            ))}
        </>
    );
}

export default Grocery;
