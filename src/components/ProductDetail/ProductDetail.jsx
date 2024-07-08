import { Link } from "react-router-dom"
import "./index.scss"

const ProductDetail = ({data}) => {
    return (
        <div className="product-detail">
            <div className="product-detail__letf">
                <div className="product-detail__card">
                    <img src={data.image} alt={data.title}/>
                    <p>{data.title}</p>
                </div>
                <div className="product-detail__description">
                    <h1>Descrição</h1>
                    <p>{data.title}</p>
                </div>
            </div>

            <div className="product-detail__right">
                <div>
                    <h1>Informações Sobre o Produto</h1>
                    <h2>{data.price.toFixed(2)}</h2>
                    <p>
                        Cor: {" "}
                        {data.colors.length === 1
                         ? data.colors.map((color, index) => (
                            <span key={index}> {color} </span>
                        ))
                        : data.colors.map((color, index) =>
                            index + 1 === data.colors.length ? (
                                <span key={index}> {color} </span>
                            ) : (
                                <span key={index}> {color}, </span>
                            )
                        )}
                    </p>
                    <div className="product-detail__cube-colors">
                        {data.colors.map((color) => (
                            <div
                             style={
                                {
                                    width: "64px",
                                    height: "60px",
                                    borderRadius: "10px",
                                    backgroundColor: color,
                                    border: "1px solid black"
                                }
                             }
                            ></div>
                        )) }
                    </div>
                    <p>Tamanho:</p>
                    <div className="product-detail__sizes">
                        {data.sizes.map((sizes) =>(
                            <span
                                style={{
                                    width: "64px",
                                    height: "60px",
                                    borderRadius: "10px",
                                    border: "1px solid black",
                                    padding: "20px",
                                    textTransform: "uppercase",
                                    textAlign: "center",
                                    margin: "10px",
                                    cursor: "pointer"
                                }}
                            >
                            {sizes}
                            </span>
                        ))
                        }
                    </div>
                    <button><Link to={`/pay/${data.id}`}>Comprar</Link></button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail