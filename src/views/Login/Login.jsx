import React from "react";
import "./index.scss";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <section className="login">
            <Header />
            <div className="login__div">
                <div className="login__text">
                    <h2>Acesse com seu login ou cadastre-se</h2>
                    <h3>você pode entrar com o seu CPF</h3>
                </div>
                <form className="login__form">
                    <div>
                        <label>Digite seu CPF:</label>
                        <input type="text" placeholder="Digite seu login" id="name" autoComplete="username"/>
                    </div>
                    <div>
                        <label>Senha:</label>
                        <input type="password" placeholder="Senha" id="password_id" autoComplete="current-password" />
                    </div>
                    <div>
                        <button type="button">
                            <Link to={'/home'}>Entrar</Link>
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Login;
