import React from "react";
import ReactDOM from "react-dom/client";
import { HomePage } from "./pages/home";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import "./styles/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HomePage />
    </Provider>
  </React.StrictMode>
);
