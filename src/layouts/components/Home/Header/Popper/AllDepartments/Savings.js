const SAVINGS = [
    { title: "Tech Savings" },
    { title: "Overstock Savings" },
    { title: "Tech Rollbacks" },
];

function Savings() {
    return (
        <>
            {SAVINGS.map((item, i) => (
                <li key={i}>{item.title}</li>
            ))}
        </>
    );
}

export default Savings;
