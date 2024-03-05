import React from "react";

const Header = () => {

    return (
        <header class="row">
            <div class="col-2">
                <img src={require("../../assets/netflixlogo.png")} />
            </div>
            <div class="col-8">
                <ul class="menu_list">
                    <li>
                        <a href="#">Início</a>
                    </li>
                    <li>
                        <a href="#">Séries</a>
                    </li>
                    <li>
                        <a href="#">Filmes</a>
                    </li>
                    <li>
                        <a href="#">Mais recentes</a>
                    </li>
                    <li>
                        <a href="#">Minha lista</a>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header;