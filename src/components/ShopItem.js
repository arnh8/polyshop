import triangle from "../assets/triangle.png";
import square from "../assets/square.png";
import pentagon from "../assets/pentagon.png";
import hexagon from "../assets/hexagon.png";
import heptagon from "../assets/heptagon.png";
import octagon from "../assets/octagon.png";

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
    return (
        <div className="shopItem">
            <img className="itemImg" src={switchImg(props.polygon.shape)} />
            <div className="itemName">{props.polygon.shape}</div>
            <div>${props.polygon.price}</div>
            <div className="quantityHandler">
                <button>-</button>
                <div>0</div>
                <button>+</button>
            </div>
        </div>
    );
}
