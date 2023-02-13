import { Provider } from "./context/books";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

//element inside the provider can access the value stored in the context
root.render(
  <Provider>
    <App />
  </Provider>
);
