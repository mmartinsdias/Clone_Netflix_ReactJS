import React from "react";
import FilmeSerie from "../FilmeSerie/index";

const Secao = () => {

    return (
        <section>
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h5 class="row text-white">Populares da netflix</h5>
                    </div>
                </div>
            </div>
            <div class="col12">
                <ul class="movie_list">
                    <FilmeSerie />
                </ul>
            </div>
        </section>
    )
}

export default Secao;