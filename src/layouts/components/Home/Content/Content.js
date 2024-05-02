import BrowseCategories from "./BrowseCategories/BrowseCategories";
import HeadContent from "./HeadContent/HeadContent";
import TotalLavAzza1320 from "./TotalLavAzza1320/TotalLavAzza1320";

function Content() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#fdf6f6",
      }}
    >
      <div>
        <HeadContent />
        <BrowseCategories />
        <TotalLavAzza1320 />
      </div>
    </div>
  );
}

export default Content;
