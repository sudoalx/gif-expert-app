import React from "react";
import ReactDOM from "react-dom/client";
import GifExpertApp from "./GifExpertApp";
import "./styles.css";
import Footer from "./components/Footer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GifExpertApp />
    <Footer />
  </React.StrictMode>
);
