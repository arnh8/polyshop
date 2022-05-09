import "../styles/App.css";
import "@fontsource/cabin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import Shop from "./Shop";
import Cart from "./Cart";

function App() {
    //const [cart, setCart] = useState([{ id: 2, quantity: 2, price: 3 }]); //a cart is an array of objects: {itemID, quantity, price?}
    const [cart, setCart] = useState([]);

    function addToCart(id, quantity, price) {
        if (quantity === 0) {
            return;
        }
        let oldCart = [...cart];
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

    function removeFromCart(index) {}

    return (
        <BrowserRouter>
            <div className="App">
                <NavBar cart={cart} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/shop"
                        element={<Shop addToCart={addToCart} />}
                    />
                    <Route
                        path="/cart"
                        element={
                            <Cart cart={cart} removeFromCart={removeFromCart} />
                        }
                    />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
