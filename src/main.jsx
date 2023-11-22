import React from "react";
import ReactDOM from "react-dom/client";
import GifExpertApp from "./GifExpertApp";
import Footer from "./components/Footer";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GifExpertApp />
    <Footer />
  </React.StrictMode>
);
