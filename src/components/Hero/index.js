import React from "react";

const Hero = () => {

    return (
        <div id="hero" class="container-fluid">
            <div class="container">
                <div class="row" id="hero_infos">
                    <div class="row col-6">
                        <img class="logo" src={require("../../assets/logo-oppenheimer.png")} />
                        <div class="facts text-white">
                            <span class="certification text-warning">16</span>
                            <span class="release"
                            >| 20/07/2023 (BR) - Drama, História - 3h 1m</span
                            >
                        </div>
                        <h1 class="text-white">
                            <img class="mr-2" src={require("../../assets/top-10.png")} /> Top 1 de hoje no Brasil.
                        </h1>
                        <p class="text-white">
                            A história do físico americano J. Robert Oppenheimer, seu papel no
                            Projeto Manhattan e no desenvolvimento da bomba atômica durante a
                            Segunda Guerra Mundial, e o quanto isso mudaria a história do
                            mundo para sempre.
                        </p>
                        <br />
                        <button class="btn btn-lg btn-custom-white">
                            <span class="mdi mdi-play"></span> Assistir Trailer
                        </button>
                        <button class="btn btn-lg btn-custom-translucent">
                            <span class="mdi mdi-information-outline"></span> Mais Informações
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;