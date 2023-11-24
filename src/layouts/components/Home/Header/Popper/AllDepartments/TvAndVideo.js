const TV_AND_VIDEO = [
    { title: "Shop all TVs" },
    { title: "TVs by Size" },
    { title: "Smart TVs" },
    { title: "Roku TVs" },
    { title: "Streaming" },
    { title: "TV Mounts & Accessories" },
    { title: "DVD & Blu-Ray Players" },
];

function TvAndVideo() {
    return (
        <>
            {TV_AND_VIDEO.map((item, i) => (
                <li key={i}>{item.title}</li>
            ))}
        </>
    );
}

export default TvAndVideo;
