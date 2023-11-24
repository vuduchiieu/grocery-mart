const TRENDING_IN_BEAUTY = [
    { title: "Trending Beauty Products" },
    { title: "Celebrate Earth Day" },
    { title: "Prom-ready Beauty" },
    { title: "Summer Beauty" },
    { title: "Travel Size & Minis" },
];

function TrendingInBeauty() {
    return (
        <>
            {TRENDING_IN_BEAUTY.map((item, i) => (
                <li key={i}>{item.title}</li>
            ))}
        </>
    );
}

export default TrendingInBeauty;
