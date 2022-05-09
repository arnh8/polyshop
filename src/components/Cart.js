import React, { useState, useEffect } from "react";
import CartItem from "./CartItem";

export default function Cart(props) {
    const [polygons, setPolygons] = useState([]);

    const getData = () => {
        fetch("./polygons.json", {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        })
            .then(function (response) {
                //console.log(response);
                return response.json();
            })
            .then(function (myJson) {
                console.log(myJson);
                setPolygons(myJson);
            });
    };

    useEffect(() => {
        getData();
        console.log("ahoymaters");
        console.log(polygons[0]);
    }, [props.cart]);

    return (
        <div className="cart">
            {props.cart.length > 0 && polygons.length > 0
                ? props.cart.map((item, index) => (
                      <CartItem
                          index={index}
                          id={item.id}
                          quantity={item.quantity}
                          removeFromCart={props.removeFromCart}
                          shape={polygons[item.id].shape}
                      />
                  ))
                : "Your cart is empty."}
        </div>
    );
}
