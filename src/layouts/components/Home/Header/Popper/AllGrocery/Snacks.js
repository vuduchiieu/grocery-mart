const SNACKS = [
    { title: "Shop All" },
    { title: "Chips" },
    { title: "Popcorn & Pretzels" },
    { title: "Crackers" },
    { title: "Salsa & Dips" },
];

function Snacks() {
    return (
        <>
            {SNACKS.map((item, i) => (
                <li key={i}>{item.title}</li>
            ))}
        </>
    );
}

export default Snacks;
