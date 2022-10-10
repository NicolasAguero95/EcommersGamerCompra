import cart from "./assets/cart.svg"
import './CartWidtget.css'

const CartWidtget = () => {
    return (
        <div class= "CartWidtget" >
            <img src= {cart} alt="cart" />
            0
        </div>
    )
};


export default CartWidtget