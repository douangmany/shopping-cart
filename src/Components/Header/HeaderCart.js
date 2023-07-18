import React from 'react'
import { MyCartContext } from '../../management/Context';
import "./Header.css";

export default function HeaderCart() {
  const { amount } = MyCartContext();
  return (
    <button className="button">
      <span>ກະຕ່າ</span>
      <span className="badge">{amount}</span>
    </button>
  );
}
