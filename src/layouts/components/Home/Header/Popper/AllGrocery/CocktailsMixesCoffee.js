const COCKTAILS_MIXESCOFFEE = [
    { title: "Ground Coffee" },
    { title: "Whole Bean Coffee" },
    { title: "Coffee Pods" },
    { title: "Instant Coffee" },
];

function CocktailsMixesCoffee() {
    return (
        <>
            {COCKTAILS_MIXESCOFFEE.map((item, i) => (
                <li key={i}>{item.title}</li>
            ))}
        </>
    );
}

export default CocktailsMixesCoffee;
