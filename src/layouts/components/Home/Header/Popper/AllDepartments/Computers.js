const COMPUTERS = [
    { title: "Shop All Computers" },
    { title: "Laptops" },
    { title: "PC Gaming" },
    { title: "Monitors" },
    { title: "Chromebook" },
    { title: "Printers & Ink" },
    { title: "Shop all TVs" },
    { title: "Computer Accessories" },
    { title: "Desktops" },
    { title: "Tax Software" },
    { title: "Computer Software" },
    { title: "PC Finder" },
];

function Computers() {
    return (
        <>
            {COMPUTERS.map((item, i) => (
                <li key={i}>{item.title}</li>
            ))}
        </>
    );
}

export default Computers;
