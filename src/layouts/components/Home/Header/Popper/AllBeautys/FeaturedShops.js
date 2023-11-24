const FEATURED_SHOPS = [
    { title: "Pickup Today in Beauty" },
    { title: "BeautySpaceNK" },
    { title: "Equate Beauty" },
    { title: "Beauty Deals" },
    { title: "Walmart Exclusives" },
    { title: "Luxury Beauty Deals" },
    { title: "New Arrivals" },
];

function FeaturedShops() {
    return (
        <>
            {FEATURED_SHOPS.map((item, i) => (
                <li key={i}>{item.title}</li>
            ))}
        </>
    );
}

export default FeaturedShops;
