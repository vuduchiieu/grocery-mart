import Header from "~/layouts/components/Home/Header/Header";
import ReviewProduct from "./ReviewProduct/ReviewProduct";
import ListProduct from "./ListProduct/ListProduct";
import Linkto from "./Linkto/Linkto";
import { useParams } from "react-router-dom";
import NotFound from "~/components/NotFound/NotFound";
import { useAppContext } from "~/components/Context/AppContext";

function ProductPage() {
    const { lavAzzaItems } = useAppContext();

    const { productId } = useParams();
    const productData =
        (productId === "coffeeBeans" && lavAzzaItems[0]) ||
        (productId === "lavazzaCoffeeBlends" && lavAzzaItems[1]) ||
        (productId === "lavazzaCaffèEspresso" && lavAzzaItems[2]) ||
        (productId === "qualitàOro" && lavAzzaItems[3]);
    if (!productData) {
        return (
            <>
                <Header />
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <div>
                        <Linkto productId={productId} />
                        <NotFound />
                    </div>
                </div>
            </>
        );
    }
    return (
        <>
            <Header />
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <div>
                    <Linkto productId={productId} />
                    <ListProduct productData={productData} />
                    <ReviewProduct />
                </div>
            </div>
        </>
    );
}
export default ProductPage;
