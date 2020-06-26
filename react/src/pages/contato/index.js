import React from "react";
import { useHistory } from "react-router-dom";

export default function Contato() {
  const history = useHistory();

  function voltar() {
    history.goBack();
  }

  return (
    <div>
      <h1>Contato</h1>
      <button onClick={voltar}>Voltar</button>
    </div>
  );
}
