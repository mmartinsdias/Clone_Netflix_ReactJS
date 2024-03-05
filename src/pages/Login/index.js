import React from "react";
import Header from "../../components/Header";

const Login = () => {

    return (
        <div
            class="container-fluid bg_filmes"
            style={{
                position: 'fixed',
                height: '100%',
            }}
        >
            <Header />

            <div id="caixa_login" class="col-4 offset-4">
                <h1 class="text-white">Entrar</h1>
                <br />
                <fomr>
                    <input
                        type="email"
                        class="form-control form-control-lg"
                        placeholder="Email ou número de telefone"
                    />
                    <br />
                    <input
                        type="password"
                        class="form-control form-control-lg"
                        placeholder="Senha"
                    />
                    <br />
                    <button class="btn btn-lg btn-block btn-danger">Entrar</button>
                    <div class="row mt-4">
                        <div class="col text-muted">
                            <input type="checkbox" /> Lembrar de mim.
                        </div>
                        <div class="col text-right">
                            <a
                                class="text-muted"
                                href="https://www.netflix.com/br/LoginHelp"
                                target="_blank"
                                rel="noopener noreferrer"
                            >Precisa de ajuda?
                            </a>
                        </div>
                    </div>
                    <div class="row col mt-4">
                        <a href="#">
                            <img height="20px" src="/assets/Facebook_logo.png" alt="facebook"
                            /></a>
                        <a class="ml-2 text-muted" href="#">Conectar com Fabook</a>
                    </div>
                    <br />
                    <br />
                    <div class="row col sing_up">
                        <p class="text-muted">
                            Novo por aqui?<a
                                class="text-white"
                                href="https://www.netflix.com/br/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Assine Agora</a
                            >
                        </p>
                    </div>
                    <div class="text-muted termos">
                        <p>
                            Esta página é protegida pelo Google reCAPTCHA para garantir que
                            você não é um robô. <a href="#">Saiba mais</a>
                        </p>
                    </div>
                    <br />
                    <br />
                    <div class="text-muted text-center creditos">
                        <p>
                            Desenvolvido por
                            <a
                                href="https://www.linkedin.com/in/matheus-martins-dias-39a059198/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >Matheus</a
                            >
                        </p>
                    </div>
                </fomr>
            </div>
        </div>
    );
};

export default Login;