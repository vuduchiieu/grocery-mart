const CELL_PHONES = [
    { title: "Wireless Deals" },
    { title: "5G Phones" },
    { title: "Prepaid Phones & Plan" },
    { title: "Refurbished Phones" },
    { title: "iPhone Accessories" },
    { title: "Cases & Screen Protectors" },
    { title: "Walmart Protection Plan" },
    { title: "Unlocked Phones" },
];

function CellPhones() {
    return (
        <>
            {CELL_PHONES.map((item, i) => (
                <li key={i}>{item.title}</li>
            ))}
        </>
    );
}

export default CellPhones;
