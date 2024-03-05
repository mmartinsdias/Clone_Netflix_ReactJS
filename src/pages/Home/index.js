// Estrutura básica do componente
import React, { useState, useEffect } from 'react';
import ModalFilme from '../../components/ModalFilme';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import Secao from '../../components/Secao';

const Home = () => {

  // O return é responsável por retornar o HTML do componente 
  return (
    <>
      <ModalFilme />

      <div class="contair-fluid">
        <Header />
      </div>

      <Hero />

      <div id="main-content" class="text-center">
        <Secao />
      </div>
    </>
  );
};

export default Home;