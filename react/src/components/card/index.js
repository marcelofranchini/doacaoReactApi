import React from "react";

import Botao from "../botao";

import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

export default function CardDoacao(props) {
  return (
    <div className="card m-4 p-3">
      <h2>Doação de {props.itens}</h2>
      <h5>De: {props.doador}</h5>
      <p>{props.descricao}</p>
      <Botao texto="Entrar em contato" cor="verde" />
    </div>
  );
}

CardDoacao.defaultProps = {
  itens: "testando",
  doador: "Nome Teste",
  descricao: "Descrição teste",
};
