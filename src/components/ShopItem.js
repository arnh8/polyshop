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

export default function ShopItem(props) {
    const [buying, setBuying] = useState(0);
    const [quantity, setQuantity] = useState(0);

    function toggleBuy() {
        setBuying(!buying);
    }

    function handleChange(event) {
        //lets pretend you cant put in negative numbers or decimals...
        setQuantity(event.target.value);
    }

    function incrementQuantity() {
        setQuantity(quantity + 1);
    }

    function decrementQuantity() {
        if (quantity - 1 < 0) {
            setQuantity(0);
            return;
        }
        setQuantity(quantity - 1);
    }

    function addCartHandler(e) {
        props.addToCart(
            props.polygon.id,
            parseInt(quantity),
            props.polygon.price
        );
        setQuantity(0);
        toggleBuy();
    }

    return (
        <div className="shopItem">
            <img className="itemImg" src={switchImg(props.polygon.shape)} />
            <div className="itemName">{props.polygon.shape}</div>
            <div>${props.polygon.price}</div>
            {buying ? (
                <div className="quantityHandler">
                    <button onClick={toggleBuy} className="shopButton">
                        X
                    </button>
                    <button onClick={decrementQuantity} className="shopButton">
                        -
                    </button>
                    <input
                        type="number"
                        onChange={handleChange}
                        value={quantity}
                        className="shopInput"
                    />
                    <button onClick={incrementQuantity} className="shopButton">
                        +
                    </button>
                    <button onClick={addCartHandler} className="shopButton">
                        Add
                    </button>
                </div>
            ) : (
                <button onClick={toggleBuy} className="buyButton">
                    Buy
                </button>
            )}
        </div>
    );
}
