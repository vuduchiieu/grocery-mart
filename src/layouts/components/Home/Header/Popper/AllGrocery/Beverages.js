const BEVERAGES = [
    { title: "Ground Coffee" },
    { title: "Whole Bean Coffee" },
    { title: "Coffee Pods" },
    { title: "Instant Coffee" },
];

function Beverages() {
    return (
        <>
            {BEVERAGES.map((item, i) => (
                <li key={i}>{item.title}</li>
            ))}
        </>
    );
}

export default Beverages;
