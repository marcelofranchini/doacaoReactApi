import React, { useState } from "react";

import Card from "../../components/card";
import Header from "../../components/header";
import Botao from "../../components/botao";
import Container from "../../components/container";

export default function Home() {
  const [listaCards, setListaCards] = useState([<Card />]);

  function adicionarDoacao() {
    setListaCards([...listaCards, <Card />]);
  }

  return (
    <div className="App">
      <Header />
      <div>
        <h1>Lista de Doações</h1>
        <button> Criar Doacao</button>
        <Botao texto="Criar Doacao" cor="btn-success" acao={adicionarDoacao} />
      </div>

      <Container>{listaCards}</Container>
    </div>
  );
}
