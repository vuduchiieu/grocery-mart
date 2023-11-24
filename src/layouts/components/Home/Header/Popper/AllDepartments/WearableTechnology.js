const WEARABLE_TECHNOLOGY = [
    { title: "Galaxy Watch" },
    { title: "Apple Watch" },
    { title: "Fitness Trackers" },
    { title: "Virtual Reality" },
    { title: "Headphones" },
];

function WearableTechnology() {
    return (
        <>
            {WEARABLE_TECHNOLOGY.map((item, i) => (
                <li key={i}>{item.title}</li>
            ))}
        </>
    );
}

export default WearableTechnology;
