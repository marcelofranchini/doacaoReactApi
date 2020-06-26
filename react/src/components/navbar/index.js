import React from "react";
import "./style.css";
import Card from "../card";
import { Link } from "react-router-dom";
const logo = "Projeto de Doações";
const listItens = ["Doações", "Faça uma Doação"];

const arrayCards = [<Card />, <Card />, <Card />];

export default function Navbar() {
  return (
    <nav>
      <ul className="menu">
        <li>{logo || "Projeto Teste"}</li>
        {listItens.map((item) => {
          return (
            <li>
              <a href="#">{item}</a>
            </li>
          );
        })}

        <li>
          <Link to="/contato"> Contato </Link>
        </li>
      </ul>
    </nav>
  );
}
