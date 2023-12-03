import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import GlobalStyles from "~/components/GlobalStyles";
import { Contexts } from "./components/Context/AppContext";
import { Provider } from "react-redux";
import store from "./components/Redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <Contexts>
                <GlobalStyles>
                    <App />
                </GlobalStyles>
            </Contexts>
        </Provider>
    </React.StrictMode>
);

reportWebVitals();
