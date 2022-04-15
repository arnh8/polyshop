import "../styles/App.css";
import { Link } from "react-router-dom";

export default function NavBar() {
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
                    <li>Cart</li>
                </Link>
            </ul>
        </div>
    );
}
