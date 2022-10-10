import { Link } from "react-router-dom"
import "./ItemList.css" 

const ItemList = ({products}) => {
    return (
        <div class="ProductsConteiner">
            { products.map(prod => (
                    <div key = {prod.id} class= "Products" >
                        <h1>{prod.name}</h1>
                        <img class="imgProd" src = {prod.img} alt = "ImagenProd" />
                        <h2>$ {prod.price}</h2>
                        <Link class='Link' to= {`/detail/${prod.id}`}>Ver Detalle </Link>
                    </div> 
                ))

            }
        </div>
    )
}

export default ItemList