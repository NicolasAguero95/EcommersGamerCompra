import { useEffect, useState } from "react"
import { getProducts } from "../../asyncMock"
import { useParams } from "react-router-dom"
import './ItemListConteiner.css'
import ItemList from "../ItemList/ItemList"

const ItemListConteiner = ({greeting}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const {categoryId} = useParams()

    useEffect(() => {
        setLoading(true)
        getProducts(categoryId).then((res) => {
            setProducts(res)
        }).finally(() => {
            setLoading(false)
        })
    }, [categoryId])

    if (loading) {
        return <h1> Loading... </h1>
    }
    

    return (
        <div>
            <h1>{greeting}</h1>
            <div class='ItemListconteiner'>
                <ItemList products= {products}/>
            </div>
        </div>
    
    
    
    )
    
}


export default ItemListConteiner