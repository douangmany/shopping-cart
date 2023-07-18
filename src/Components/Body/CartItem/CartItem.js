import React from "react";
import { MyCartContext } from "../../../management/Context";
import "./CartItem.css";

export default function CartItem({ id, name, image_url, price, quantity }) {
  const { removeItem, toggleQuantity, formatNumber } = MyCartContext();
  return (
    <div className="item">
      <div className="product_image">
        <img src={image_url} alt="" />
      </div>
      <div className="description">
        <span>{name}</span>
        <span> ລາຄາ {formatNumber(price)} ກີບ</span>
      </div>
      <div className="quantity">
        <button
          className="plus-btn"
          onClick={() => toggleQuantity(id, "increment")}
        >
          <img src="./assets/images/plus.svg" alt="" />
        </button>
        <input type="text" value={quantity} disabled />
        <button
          className="minus-btn"
          onClick={() => toggleQuantity(id, "decrement")}
        >
          <img src="./assets/images/minus.svg" alt="" />
        </button>
      </div>
      <div className="total-price">{formatNumber(quantity * price)}</div>
      <div className="remove">
        <img
          src="./assets/images/delete-icn.svg"
          alt=""
          onClick={() => removeItem(id)}
        />
      </div>
    </div>
  );
}
