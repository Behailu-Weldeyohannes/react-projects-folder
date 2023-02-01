import React from "react";
import ReactDOM from "react-dom/client";
import About from "./components/About"
import Header from "./components/Header";
import Footer from "./components/Footer";


const Card = (
  <div>
    <Header />
    <About />
    <Footer />
  </div>
);
ReactDOM.createRoot(document.getElementById("root")).render(Card);


