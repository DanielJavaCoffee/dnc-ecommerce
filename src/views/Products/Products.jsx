import "./index.scss"
import HeaderMenu from "../../components/HeaderMenu/HeaderMenu"
import Search from "../../components/Search/Search"
import ProductDetail from "../../components/ProductDetail/ProductDetail"
import { useParams } from "react-router-dom"

const Products = ({data}) => {
    const { productId } = useParams()
    const selectProduct = data.find((product) => product.id == productId)
    
    return (
        <div className="products">
            <HeaderMenu/>
            <Search/>

            <ProductDetail data={selectProduct}/>
        </div>
    )
}

export default Products