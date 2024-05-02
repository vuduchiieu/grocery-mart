import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import GlobalStyles from "~/components/GlobalStyles";
import { Contexts } from "./components/Context/AppContext";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Contexts>
        <GlobalStyles>
          <App />
        </GlobalStyles>
      </Contexts>
    </PersistGate>
  </Provider>
);

reportWebVitals();
