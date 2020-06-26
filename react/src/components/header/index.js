import React from "react";
import Navbar from "../navbar";
import Search from "../search";
import "./style.css";
export default function Header() {
  return (
    <header className="topbar">
      <Navbar />
      <Search />
    </header>
  );
}
