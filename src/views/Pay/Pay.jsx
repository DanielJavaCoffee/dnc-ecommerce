import React from "react";
import "./index.scss";
import Header from "../../components/Header/Header";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom"

const Pay = ({data}) => {
    const { payId } = useParams()
    const select = data.find((product) => product.id == payId)
    console.log(select)
    return (
        <section>
          <Header />

          <div className="pay-container">
            <div className="pay-container__flex">
              <label>Nome:</label>
              <input type="text" name="nome" id="nome" placeholder="Nome Completo"></input>

              <label>Endereço de entrega:</label>
              <input type="text" name="nome" id="nome" placeholder="Endereço de entrega"></input>

              <label>Forma de Pagamento</label>

              <div className="pay-container__radio">
                <div>
                  <input type="radio" id="pix" name="payment" value="Pix"/>
                  <label for="pix">Pix</label>
                </div>

                <div>
                  <input type="radio" id="boleto" name="payment" value="Boleto"/>
                  <label for="boleto">Boleto</label>
                </div>

                <div>
                  <input type="radio" id="cartao" name="payment" value="Cartão de Crédito"/>
                  <label for="cartao">Cartão de Crédito</label>
                </div>
              </div>

              <button><Link to={"/home"}>Enviar Pedido</Link></button>
            </div>

            <div className="pay-container__right">
              <div>
                <h2>Resumo do Pedido:</h2>

                <p>Produtos(1): <span>{select.price}</span></p>
                <hr></hr>
                <p>total: <span>{select.price}</span></p>
              </div>
            </div>
          </div>
        </section>
    );
};

export default Pay;