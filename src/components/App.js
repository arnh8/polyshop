import "../styles/App.css";
import NavBar from "./NavBar";
import Home from "./Home";
import Shop from "./Shop";
import Cart from "./Cart";

function App() {
    return (
        <div className="App">
            <NavBar />
            <Home />
            <Shop />
            <Cart />
        </div>
    );
}

export default App;
