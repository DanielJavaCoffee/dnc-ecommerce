import "./index.scss";
import searchLogo from "../../assets/lupa.svg";
import profileLogo from "../../assets/perfil.svg";
import favoriteLogo from "../../assets/coracao.svg";

const Search = () => {
    return (
        <div className="search">
            <div className="search__input-container">
                <img
                    src={searchLogo}
                    alt="search logo"
                    className="search__logo"
                />
                <input type="text" placeholder="O que você está procurando?" />
                <img
                    src={profileLogo}
                    alt="profile logo"
                    className="search__icon"
                />
                <img
                    src={favoriteLogo}
                    alt="favorite logo"
                    className="search__icon"
                />
            </div>
        </div>
    );
};

export default Search;
