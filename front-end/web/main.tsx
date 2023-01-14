import React from "react";
import ReactDOM from "react-dom/client";
import App from "../src/App";
import "./styles.css";

// @ts-expect-error tsconfig currently for react native
ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);
