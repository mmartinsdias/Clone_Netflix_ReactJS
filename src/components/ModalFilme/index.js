import React from "react";
import Episodio from "../Episodio";

const ModalFilme = () => {

    return (
        <>
            <div class="modal fade" id="modal-filme-avatar">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-hero-avatar">
                            <img src={require("../../assets/modal/avatarlogo.png")} />
                            <div class="col-12 modal-hero-infos">
                                <button class="btn btn-lg btn-custom-white">
                                    <span class="mdi mdi-play"></span> Assistir Trailer
                                </button>
                                <a
                                    href="#"
                                    class="btn-custom-round btn btn-lg btn-light rounded-circle"
                                >
                                    <span class="mdi mdi-play"></span>
                                </a>
                                <a
                                    href="#"
                                    class="btn-custom-round border-white btn btn-lg rounded-circle opacity-50"
                                >
                                    <span class="mdi mdi-thumb-up text-white"></span>
                                </a>
                                <a
                                    href="#"
                                    class="btn-custom-round border-white btn btn-lg rounded-circle opacity-50"
                                >
                                    <span class="mdi mdi-thumb-down text-white"></span>
                                </a>
                            </div>
                        </div>
                        <div class="modal-infos">
                            <div class="container">
                                <div class="row">
                                    <div class="col-7">
                                        <p class="filme_descricao">
                                            Um garoto conhecido como o Avatar precisa dominar os quatro
                                            poderes elementares para salvar um mundo em guerra e
                                            enfrentar um inimigo implacável.
                                        </p>
                                    </div>
                                    <div class="col-5">
                                        <p class="elenco">
                                            Elenco:
                                            <text
                                            >Gordon Cormier, Kiawentiio, Ian Ousley, Dallas Liu, Ken
                                                Leung, Paul Sun-Hyung Lee, Daniel Dae Kim, Matthew Yang
                                                King, Ruy Iskandar,</text
                                            >
                                            <a
                                                class="text-muted"
                                                href="https://www.themoviedb.org/tv/82452-avatar-the-last-airbender/cast"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >Mostrar mais.</a
                                            >
                                            <br />
                                            <br />
                                            Gêneros:
                                            <text
                                            >Ficção científica e fantasia, Ação e aventura,
                                                Drama</text
                                            >
                                        </p>
                                    </div>
                                </div>
                                <br />
                                <div class="row">
                                    <div class="col-7">
                                        <h3 class="text-white">Trailers</h3>
                                    </div>
                                    <div class="col-5 text-right">
                                        <select class="form-control text-white">
                                            <option>Temporada 1</option>
                                        </select>
                                    </div>
                                </div>
                                <br />
                                <div class="row">
                                    <ul id="lista_trailers">
                                        <Episodio />
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="modal fade" id="modal-filme-aliceinborderland">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-hero-borderland">
                            <img src={require("../../assets/modal/aliceinborderlandlogo.png")} />
                            <div class="col-12 modal-hero-infos">
                                <button class="btn btn-lg btn-custom-white">
                                    <span class="mdi mdi-play"></span> Assistir Trailer
                                </button>
                                <a
                                    href="#"
                                    class="btn-custom-round btn btn-lg btn-light rounded-circle"
                                >
                                    <span class="mdi mdi-play"></span>
                                </a>
                                <a
                                    href="#"
                                    class="btn-custom-round border-white btn btn-lg rounded-circle opacity-50"
                                >
                                    <span class="mdi mdi-thumb-up text-white"></span>
                                </a>
                                <a
                                    href="#"
                                    class="btn-custom-round border-white btn btn-lg rounded-circle opacity-50"
                                >
                                    <span class="mdi mdi-thumb-down text-white"></span>
                                </a>
                            </div>
                        </div>
                        <div class="modal-infos">
                            <div class="container">
                                <div class="row">
                                    <div class="col-7">
                                        <p class="filme_descricao">
                                            Um gamer e dois amigos são transportados para uma versão
                                            paralela de Tóquio, onde precisam participar de diversos
                                            jogos mortais caso queiram sobreviver.
                                        </p>
                                    </div>
                                    <div class="col-5">
                                        <p class="elenco">
                                            Elenco:
                                            <text
                                            >Kento Yamazaki, Tao Tsuchiya, Aya Asahina, Nijiro
                                                Murakami, Yutaro Watanabe, Ayaka Miyoshi, Dori
                                                Sakurada,Sho Aoyagi, Yuki Morinaga,</text
                                            >
                                            <a
                                                class="text-muted"
                                                href="https://www.themoviedb.org/tv/110316/cast"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >Mostrar mais.</a
                                            >
                                            <br />
                                            <br />
                                            Gêneros:
                                            <text
                                            >Ficção científica e fantasia, Ação e aventura,
                                                Drama</text
                                            >
                                        </p>
                                    </div>
                                </div>
                                <br />
                                <div class="row">
                                    <div class="col-7">
                                        <h3 class="text-white">Trailers</h3>
                                    </div>
                                    <div class="col-5 text-right">
                                        <select class="form-control text-white">
                                            <option>Temporada 1</option>
                                            <option>Temporada 2</option>
                                        </select>
                                    </div>
                                </div>
                                <br />
                                <div class="row">
                                    <ul id="lista_trailers">

                                        <li>
                                            <div class="row">
                                                <div class="col-1 my-auto text-center">
                                                    <h3 class="text-white">1.</h3>
                                                </div>
                                                <div class="col-4">
                                                    <iframe
                                                        class="img-fluid"
                                                        width="560"
                                                        height="315"
                                                        src="https://www.youtube.com/embed/WZCxI1qv310?si=N1LMNRWs62O-NS6e"
                                                        title="YouTube video player"
                                                        frameborder="0"
                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                        allowfullscreen
                                                    ></iframe>
                                                </div>
                                                <div class="col-7">
                                                    <h6 class="text-white">Trailer 1</h6>
                                                    <p class="text-muted">
                                                        Lorem ipsum dolor sit amet consectetur adipisicing
                                                        elit. Culpa magni nobis sequi velit veniam, doloremque
                                                        vitae quasi consequatur asperiores ut quas eius
                                                        voluptatum, nisi possimus expedita sapiente deserunt
                                                        temporibus sunt?
                                                    </p>
                                                </div>
                                            </div>
                                        </li>

                                        <li>
                                            <div class="row">
                                                <div class="col-1 my-auto text-center">
                                                    <h3 class="text-white">2.</h3>
                                                </div>
                                                <div class="col-4">
                                                    <iframe
                                                        class="img-fluid"
                                                        width="560"
                                                        height="315"
                                                        src="https://www.youtube.com/embed/XCaPoypSH9E?si=Kf8OHu-h-mdzUV0d"
                                                        title="YouTube video player"
                                                        frameborder="0"
                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                        allowfullscreen
                                                    ></iframe>
                                                </div>
                                                <div class="col-7">
                                                    <h6 class="text-white">Trailer 2</h6>
                                                    <p class="text-muted">
                                                        Lorem ipsum dolor sit amet consectetur adipisicing
                                                        elit. Culpa magni nobis sequi velit veniam, doloremque
                                                        vitae quasi consequatur asperiores ut quas eius
                                                        voluptatum, nisi possimus expedita sapiente deserunt
                                                        temporibus sunt?
                                                    </p>
                                                </div>
                                            </div>
                                        </li>

                                        <li>
                                            <div class="row">
                                                <div class="col-1 my-auto text-center">
                                                    <h3 class="text-white">3.</h3>
                                                </div>
                                                <div class="col-4">
                                                    <iframe
                                                        class="img-fluid"
                                                        width="560"
                                                        height="315"
                                                        src="https://www.youtube.com/embed/2aQnzZe34yc?si=cfaGWAm79lq5kAzn"
                                                        title="YouTube video player"
                                                        frameborder="0"
                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                        allowfullscreen
                                                    ></iframe>
                                                </div>
                                                <div class="col-7">
                                                    <h6 class="text-white">Trailer </h6>
                                                    <p class="text-muted">
                                                        Lorem ipsum dolor sit amet consectetur adipisicing
                                                        elit. Culpa magni nobis sequi velit veniam, doloremque
                                                        vitae quasi consequatur asperiores ut quas eius
                                                        voluptatum, nisi possimus expedita sapiente deserunt
                                                        temporibus sunt?
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ModalFilme;