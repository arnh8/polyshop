import "../styles/App.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

export default function NavBar(props) {
    const [count, setCount] = useState(0);

    function countCart() {
        let tempcount = 0;
        for (let i = 0; i < props.cart.length; i++) {
            const element = props.cart[i].quantity;
            tempcount += parseInt(props.cart[i].quantity);
        }
        console.log("wthettehah " + tempcount);
        setCount(tempcount);
    }

    useEffect(() => {
        countCart();
    }, [props.cart]);

    return (
        <div className="navBar">
            <Link to="/">
                <h3>PolyShop</h3>
            </Link>
            <ul className="navLinks">
                <Link to="/shop">
                    <li>Shop</li>
                </Link>
                <Link to="/cart">
                    <li>{count > 0 ? `Cart (${count})` : "Cart"}</li>
                </Link>
            </ul>
        </div>
    );
}
