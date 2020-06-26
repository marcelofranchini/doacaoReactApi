import React from "react";
import "./style.css";
export default function Botao(props) {
  return (
    <div onClick={props.acao} className={`btn ${props.cor}`}>
      <span>{props.texto}</span>
    </div>
  );
}

Botao.defaultProps = {
  texto: "Ação",
  cor: "vermelho",
};
