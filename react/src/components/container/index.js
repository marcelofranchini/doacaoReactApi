import React from "react";
import "./style.css";
export default function Container(props) {
  return <section className="container-principal">{props.children}</section>;
}
