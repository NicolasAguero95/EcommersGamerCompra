import CartWidtget from "../CartWidget/CartWidget";
import "./Navbar.css"

const Navbar = () => {
    return (
        <nav style={{display: "flex", justifyContent: "space-around", backgroundColor: "aquamarine"}}>
            <h1 class= "titulo"> Gamer Compra</h1>
            <div class = "divButton">
                <button>Productos</button>
                <button>PC's</button>
                <button>Celulares</button>
                <button>Placas de Video</button>
            </div>
            <div class= "divCart">
                <CartWidtget/>
            </div>
        </nav>
    )
};

export default Navbar;