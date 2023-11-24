const COMMUNITIES_TO_SHUPPORT = [
    { title: "Black Owned Beauty" },
    { title: "LatinX Owned Beauty" },
    { title: "AAPI Owned Beauty" },
];

function CommunitiesToSupport() {
    return (
        <>
            {COMMUNITIES_TO_SHUPPORT.map((item, i) => (
                <li key={i}>{item.title}</li>
            ))}
        </>
    );
}

export default CommunitiesToSupport;
