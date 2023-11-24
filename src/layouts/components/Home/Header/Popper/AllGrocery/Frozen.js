const FROZEN = [
    { title: "Frozen Breakfast" },
    { title: "Frozen Potatoes" },
    { title: "Frozen Meals & Snacks" },
];

function Frozen() {
    return (
        <>
            {FROZEN.map((item, i) => (
                <li key={i}>{item.title}</li>
            ))}
        </>
    );
}

export default Frozen;
