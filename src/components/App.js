import "../styles/App.css";
import "@fontsource/cabin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import Shop from "./Shop";
import Cart from "./Cart";

function App() {
    const [cart, setCart] = useState([]); //a cart is an array of objects: {itemID, quantity, price?}

    function addToCart(id, quantity, price) {
        const oldCart = cart;
        oldCart.push({ id, quantity, price });
        setCart(oldCart);
    }

    return (
        <BrowserRouter>
            <div className="App">
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/shop"
                        element={<Shop />}
                        addToCart={addToCart}
                    />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
