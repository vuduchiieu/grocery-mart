const BEAUTY = [
    { title: "Shop All" },
    { title: "Men's Grooming" },
    { title: "Bath & Body" },
    { title: "Beauty Tech & Tools" },
    { title: "Makeup" },
    { title: "Fragrance" },
    { title: "Nail Care" },
    { title: "Hair Care" },
    { title: "Hair Color" },
    { title: "Skincare" },
];

function Beauty() {
    return (
        <>
            {BEAUTY.map((item, i) => (
                <li key={i}>{item.title}</li>
            ))}
        </>
    );
}

export default Beauty;
