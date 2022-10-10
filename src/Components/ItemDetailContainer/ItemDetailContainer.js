import { useEffect, useState } from "react"
import { getProduct } from "../../asyncMock"
import { useParams } from "react-router-dom" 


const ItemDetailContainer = () => {
    const [producto, setProduct] = useState({})
    const [loading, setLoading] = useState(true)

    const {productoId} = useParams()

    useEffect(() => {
        getProduct(productoId).then(product => {
            setProduct(product)
        }).finally(() => {
            setLoading(false)
        })
    }, [])
    
    

    if(loading) {
        return <h1> Loading...</h1>
    }

    return (
        <div>
            <h1>Detalle de Producto</h1>
            <div>
                <h2>{producto.descripcion}</h2>
            </div>
        </div>
    )
}


export default ItemDetailContainer