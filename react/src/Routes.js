import React from "react";

import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Contato from "./pages/contato";
import CadastroItem from "./pages/criarItens";
export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route path="/" exact component={Home} />  dizer qual componente renderizar*/}
        <Route path="/home" exact component={Home} /> 
        <Route path="/contato" exact component={Contato} />
        <Route path="/itens/cadastro" exact component={CadastroItem} />
      </Switch>
    </BrowserRouter>
  );
}
