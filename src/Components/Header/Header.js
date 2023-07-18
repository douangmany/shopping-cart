import React from "react";
import HeaderCart from "./HeaderCart";
import './Header.css'

export default function Header() {
  return (
    <header className="header">
      <h1>AppZap</h1>
      <HeaderCart/>
    </header>
  );
}
