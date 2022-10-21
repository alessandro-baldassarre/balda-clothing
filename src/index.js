import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Elements } from "@stripe/react-stripe-js";

import { persistor, store } from "./store/store";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

import { PersistGate } from "redux-persist/integration/react";
import { stripePromise } from "./utils/stripe/stripe.utils";

import App from "./App";
import { Globalstyle } from "./global.styles";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Elements stripe={stripePromise}>
            <Globalstyle />
            <App />
          </Elements>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

serviceWorkerRegistration.register();
