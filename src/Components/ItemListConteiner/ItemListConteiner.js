import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getProducts } from "../../asyncMock"

const ItemListConteiner = ({greeting}) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts().then((res) => {
            setProducts(res)
        })
    }, [])

    return (
        <div>
            <h1>{greeting}</h1>
            <div>
                { products.map(prod => (
                    <div key = { prod.id}>
                        <h1>{prod.name}</h1>
                        <h2>$ {prod.price}</h2>
                        <Link to= {`/detail/${prod.id}`}>Ver Detalle </Link>
                    </div> 
                ))

                }
            </div>
        </div>
    
    
    
    )
    
}


export default ItemListConteiner