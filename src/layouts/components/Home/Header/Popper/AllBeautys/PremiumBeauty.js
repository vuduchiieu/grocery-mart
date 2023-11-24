const PREMIUM_BEAUTY = [
    { title: "Shop All" },
    { title: "Hair Color" },
    { title: "Hair Care" },
    { title: "Skincare" },
    { title: "Fragrance" },
    { title: "Makeup" },
    { title: "Beauty Tech & Tools" },
];

function PremiumBeauty() {
    return (
        <>
            {PREMIUM_BEAUTY.map((item, i) => (
                <li key={i}>{item.title}</li>
            ))}
        </>
    );
}

export default PremiumBeauty;
