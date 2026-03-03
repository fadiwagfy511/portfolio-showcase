import "./i18n";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Set initial dir from stored language
const storedLang = localStorage.getItem("i18nextLng") || "en";
document.documentElement.dir = storedLang === "ar" ? "rtl" : "ltr";
document.documentElement.lang = storedLang;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
