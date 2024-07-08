import "./index.scss"
import Logo from "../../assets/logo.svg"
import Carrinho from "../../assets/carrinho.svg"

const HeaderMenu = () => {
    return (
        <header className="header-menu">
            <img src={Logo} alt="logo" className="header-menu__logo"></img>
            <ul>
                <li>Home</li>
                <li>Novidades</li>
                <li>Feminino</li>
                <li>Masculino</li>
                <li>Atendimento</li>
            </ul>
            <div className="header-menu__cart-shop">
                <h1>Meu Carrinho</h1>
                <img src={Carrinho} alt="cartLogo"></img>
            </div>
        </header>
    );
};

export default HeaderMenu;