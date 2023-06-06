import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./modules/app/App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./modules/contacts/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
