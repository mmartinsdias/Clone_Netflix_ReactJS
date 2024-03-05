import React from "react";

const FilmeSerie = () => {
    return (
        <li
            class="movie"
            data-toggle="modal"
            data-target="#modal-filme-avatar"
        >
            <img
                src={require("../../assets/movies/populares/avatar1.jpg")}
                class="img-fluid"
            />
            <div class="movie_info">

                <div class="col-12">
                    <a
                        href="#"
                        class="btn-custom-round btn btn-light rounded-circle"
                    >
                        <span class="mdi mdi-play"></span>
                    </a>
                    <a
                        href="#"
                        class="btn-custom-round border-white btn rounded-circle opacity-50"
                    >
                        <span class="mdi mdi-thumb-up text-white"></span>
                    </a>
                    <a
                        href="#"
                        class="btn-custom-round border-white btn rounded-circle opacity-50"
                    >
                        <span class="mdi mdi-thumb-down text-white"></span>
                    </a>
                    <a
                        href="#"
                        class="btn-custom-round border-white btn rounded-circle opacity-50"
                    >
                        <span class="mdi mdi-plus text-white"></span>
                    </a>
                </div>
                <p>
                    <span class="classificação">12</span> T1 - 8 ep. -<text
                        class="text-white"
                    >
                        Ação e aventura.</text
                    >
                </p>
            </div>
        </li>

    )
}

export default FilmeSerie;