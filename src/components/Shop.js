import React, { useState, useEffect } from "react";
import ShopItem from "./ShopItem";

export default function Shop(props) {
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
                //console.log(myJson);
                setPolygons(myJson);
            });
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="shop">
            {polygons.map((polygon) => (
                <ShopItem
                    polygon={polygon}
                    key={polygon.id}
                    addToCart={props.addToCart}
                />
            ))}
        </div>
    );
}
