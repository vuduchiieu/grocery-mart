const CANDY = [
    { title: "Shop All" },
    { title: "Better for You" },
    { title: "Chocolate" },
    { title: "Sugar Free Candy" },
    { title: "Gum" },
    { title: "Mints" },
    { title: "On-the-Go" },
];

function Candy() {
    return (
        <>
            {CANDY.map((item, i) => (
                <li key={i}>{item.title}</li>
            ))}
        </>
    );
}

export default Candy;
