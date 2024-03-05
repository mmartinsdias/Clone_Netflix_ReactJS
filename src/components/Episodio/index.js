import React from "react";

const Episodio = () => {

    return (
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
                        src="https://www.youtube.com/embed/THNsNv_ryyM?si=y1_ao-xeO22r_B3a"
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
    );
};

export default Episodio;