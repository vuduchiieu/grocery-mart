import { createContext, useContext, useEffect, useState } from "react";
import { TotalLavAzza, products } from "~/components/productList/productList";
import icon from "~/assets/icon";

export const AppContext = createContext();

export const Contexts = ({ children }) => {
    //reaction
    const [lavAzzaItems, setLavAzzaItems] = useState(TotalLavAzza);
    const [listHeart, setListHeart] = useState(
        JSON.parse(localStorage.getItem("likedItems")) || []
    );

    // statusHeart
    const handleReactionClick = (i) => {
        if (login === true) {
            const updatedLavAzzaItems = [...lavAzzaItems];
            updatedLavAzzaItems[i].reaction =
                updatedLavAzzaItems[i].reaction === icon.heart
                    ? icon.heartActive
                    : icon.heart;
            setLavAzzaItems(updatedLavAzzaItems);
            const likedItems = updatedLavAzzaItems.filter(
                (item) => item.reaction === icon.heartActive
            );
            localStorage.setItem("likedItems", JSON.stringify(likedItems));
            setListHeart(likedItems);
        } else {
            window.location.href = "/signin";
        }
    };
    //login
    const initialLogin = localStorage.getItem("login") === "true";
    const [login, setLogin] = useState(initialLogin);
    //totalPrice
    const totalAmount = products.reduce((total, product) => {
        return total + product.price;
    }, 0);
    const totalPrice = parseFloat(totalAmount.toFixed(2));
    //addtocart
    const [cartItem, setCartItem] = useState([]);
    const updateCartItem = (pros) => {
        if (login === true) {
            const currentCartItem = products.push(pros);
            localStorage.setItem("products", JSON.stringify(products));
            setCartItem(currentCartItem);
        } else {
            window.location.href = "/signin";
        }
    };
    //removetocart
    const removeCartItem = (item) => {
        const updatedCartItems = [...products];
        const indexToRemove = updatedCartItems.findIndex(
            (product) => product.id === item.id
        );
        if (indexToRemove !== -1) {
            products.splice(indexToRemove, 1);
            setCartItem(updatedCartItems);
            localStorage.setItem("products", JSON.stringify(products));
        }
    };

    //uniqueProducts
    const uniqueProducts = Array.from(
        new Set(products.map((item) => item.productName))
    )
        .map((productName) =>
            products.find((item) => item.productName === productName)
        )
        .sort((a, b) => a.id - b.id);
    const productQuantities = {};
    products.forEach((item) => {
        if (productQuantities[item.id]) {
            productQuantities[item.id]++;
        } else {
            productQuantities[item.id] = 1;
        }
    });

    //removeAllCartItem
    const removeAllCartItem = (item) => {};
    //set avatar
    let [avatar, setAvatar] = useState();
    useEffect(() => {
        return () => {
            avatar && URL.revokeObjectURL(avatar.review);
        };
    }, [avatar]);
    const uploadAvatar = (e) => {
        const processingImg = e.target.files[0];
        if (e.target.files.length !== 0) {
            processingImg.review = URL.createObjectURL(processingImg);
        }
        setAvatar(processingImg);
    };
    //UserName && phone
    const [name, setName] = useState();
    const [phone, setPhone] = useState();
    //adress
    const [detailed, setDetailed] = useState();
    const [town, setTown] = useState();
    const [state, setState] = useState();
    const [dc, setDC] = useState();
    //setPersonal
    const [personal, setPersonal] = useState(false);
    //setAddresses
    const [addresses, setAddresses] = useState(false);

    return (
        <AppContext.Provider
            value={{
                lavAzzaItems,
                handleReactionClick,
                cartItem,
                updateCartItem,
                listHeart,
                login,
                setLogin,
                totalPrice,
                avatar,
                setAvatar,
                uploadAvatar,
                setCartItem,
                removeCartItem,
                removeAllCartItem,
                uniqueProducts,
                productQuantities,
                name,
                setName,
                phone,
                setPhone,
                detailed,
                setDetailed,
                town,
                setTown,
                state,
                setState,
                dc,
                setDC,
                personal,
                setPersonal,
                addresses,
                setAddresses,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    return useContext(AppContext);
};
