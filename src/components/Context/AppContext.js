import { createContext, useContext, useEffect, useState } from "react";
import { products } from "~/components/productList/productList";
import icon from "~/assets/icon";
import axios from "axios";

export const AppContext = createContext();

export const Contexts = ({ children }) => {
    //reaction
    const [lavAzzaItems, setLavAzzaItems] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "https://be-sieutaphoa.vercel.app/api/v2/products"
                );
                setLavAzzaItems(response.data.data);
            } catch (error) {
                console.error("Error fetching existing users:", error);
            }
        };
        fetchData();
    }, []);
    const [listHeart, setListHeart] = useState(
        JSON.parse(localStorage.getItem("likedItems")) || []
    );
    // statusHeart
    const handleReactionClick = (i) => {
        if (login === true) {
            const updatedLavAzzaItems = [...lavAzzaItems];
            updatedLavAzzaItems[i].reaction =
                updatedLavAzzaItems[i].reaction ===
                "https://drive.google.com/uc?export=view&id=1FM8exHhXIhPholrLDGq49RDVJgUL8c67"
                    ? icon.heartActive
                    : "https://drive.google.com/uc?export=view&id=1FM8exHhXIhPholrLDGq49RDVJgUL8c67";
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

    //clearCartItem
    const clearCartItem = (item) => {
        const updatedCartItems = [...products];
        let indexToRemove;
        while ((indexToRemove = products.indexOf(item)) !== -1) {
            products.splice(indexToRemove, 1);
        }
        setCartItem(updatedCartItems);
        localStorage.setItem("products", JSON.stringify(products));
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

    //adress
    const [detailed, setDetailed] = useState();
    const [town, setTown] = useState();
    const [state, setState] = useState();
    const [dc, setDC] = useState();
    //setPersonal
    const [personal, setPersonal] = useState(false);
    //setAddresses
    const [addresses, setAddresses] = useState(false);
    //setList
    const [lists, setLists] = useState(false);

    //setid
    const [idApi, setIdApi] = useState(localStorage.getItem("idApi") || "");

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
                clearCartItem,
                uniqueProducts,
                productQuantities,
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
                lists,
                setLists,
                idApi,
                setIdApi,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    return useContext(AppContext);
};
