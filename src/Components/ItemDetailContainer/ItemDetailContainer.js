import { useEffect, useState } from "react"
import { getProduct } from "../../asyncMock"


const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    useEffect(() => {
        getProduct("1").then(product => {
            setProduct(product)
        })
    }, [])
    
    return (
        <div>
            <h1>Detalle de Producto</h1>
            <div>
                <h1>{product.descripcion}</h1>
            </div>
        </div>
    )
}


export default ItemDetailContainer