import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

import Home from "~/layouts/components/Home";
import ProductPage from "~/layouts/components/ProductPage";
import AddToCart from "~/layouts/components/addTocart";
import Profile from "~/layouts/components/Profile";

import { SignIn, SignUp } from "./layouts/components/login";
import { useAppContext } from "./components/Context/AppContext";

function App() {
    const { login } = useAppContext();
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/product/:productId"
                        element={<ProductPage />}
                    ></Route>
                    {login === true ? (
                        <Route path="/addtocart/" element={<AddToCart />} />
                    ) : (
                        <Route element={<NotFound />} />
                    )}
                    {login === true ? (
                        <Route path="/profile/" element={<Profile />} />
                    ) : (
                        <Route element={<NotFound />} />
                    )}

                    <Route path="*" element={<NotFound />} />
                </Routes>
                <ScrollToTop />
            </div>
        </Router>
    );
}

export default App;
