import triangle from "../assets/triangle.png";
import square from "../assets/square.png";
import pentagon from "../assets/pentagon.png";
import hexagon from "../assets/hexagon.png";
import heptagon from "../assets/heptagon.png";
import octagon from "../assets/octagon.png";

import React, { useState, useEffect } from "react";

function switchImg(shape) {
    switch (shape) {
        case "triangle":
            return triangle;

        case "square":
            return square;

        case "pentagon":
            return pentagon;

        case "hexagon":
            return hexagon;

        case "heptagon":
            return heptagon;

        case "octagon":
            return octagon;

        default:
            break;
    }
}

export default function CartItem(props) {
    function removeFromCartHandler() {
        props.removeFromCart(props.id);
    }

    return (
        <div className="cartItem">
            <img className="itemImg" src={switchImg(props.shape)} />
            <div className="itemDetails">
                <div className="itemName">{props.shape}</div>
                <div className="itemQuant">Quantity: {props.quantity}</div>
            </div>
            <button className="cartRemove" onClick={removeFromCartHandler}>
                Remove
            </button>
        </div>
    );
}
