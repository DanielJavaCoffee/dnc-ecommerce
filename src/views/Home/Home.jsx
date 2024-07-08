import "./index.scss"

import HeaderMenu from "../../components/HeaderMenu/HeaderMenu"
import Search from "../../components/Search/Search"
import ProductsCard from "../../components/ProductsCard/ProductsCard"

const Home = ({data}) => {
    console.log(data)
    return (
        <div className="Home">
            <HeaderMenu/>
            <Search/>

            <div className="Home__products">
                {
                    data.map(products => ( <ProductsCard key={products.id} data={products} /> ))
                }
            </div>
        </div>
    )
}

export default Home;