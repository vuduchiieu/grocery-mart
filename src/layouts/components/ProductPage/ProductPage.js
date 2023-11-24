import Header from "~/layouts/components/Home/Header/Header";
import ReviewProduct from "./ReviewProduct/ReviewProduct";
import ListProduct from "./ListProduct/ListProduct";
import Linkto from "./Linkto/Linkto";
import { useParams } from "react-router-dom";
import { TotalLavAzza } from "~/components/productList/productList";
import NotFound from "~/components/NotFound/NotFound";

function ProductPage() {
    const { productId } = useParams();
    const productData =
        (productId === "coffeeBeans" && TotalLavAzza[0]) ||
        (productId === "lavazzaCoffeeBlends" && TotalLavAzza[1]) ||
        (productId === "lavazzaCaffèEspresso" && TotalLavAzza[2]) ||
        (productId === "qualitàOro" && TotalLavAzza[3]);
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
