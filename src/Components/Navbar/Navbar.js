import CartWidtget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
    return (
        <nav class= 'navBarSt'>
            <h1 class = "titulo"> Gamer Compra</h1>
            <div class = "divButton">
                <Link to={`/`} class = "buttonButton">Productos</Link>
                <Link to={`/category/Procesadores`} class = "buttonButton">Procesadores</Link>
                <Link to={`/category/Celulares`} class = "buttonButton">Celulares</Link>
                <Link to={`/category/PlacasDeVideo`} class = "buttonButton">Placas de Video</Link>
            </div>
            <div class= "divCart">
                <CartWidtget/>
            </div>
        </nav>
    )
};

export default Navbar;