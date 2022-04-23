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
        if (quantity === 0) {
            return;
        }
        const oldCart = cart;
        let found = false;
        //if id is already in cart, just increase its quantity
        oldCart.find((x) => {
            if (x.id === id) {
                x.quantity = x.quantity + quantity;
                found = true;
                return true;
            }
            return false;
        });

        if (!found) {
            oldCart.push({ id, quantity, price });
        }
        setCart(oldCart);
        console.log(cart);
    }

    return (
        <BrowserRouter>
            <div className="App">
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/shop"
                        element={<Shop addToCart={addToCart} />}
                    />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
