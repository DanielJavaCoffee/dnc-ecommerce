import { Link } from 'react-router-dom'
import './index.scss'

const ProductsCard = ({data}) => {
    return (
        <div className='products'>
            <div>
                <img className='products__image' src={data.image}/>
            </div>
            <div>
                <p className='products__text'>{data.title}</p>
                <button className='products__btn'><Link to={`/products/${data.id}`}>Comprar Look</Link></button>
            </div>
        </div>
    )
}

export default ProductsCard