import React from 'react'
// import CartData from "../../data/CartData"
import CartItem from '../CartItem/CartItem'
import { MyCartContext } from "../../../management/Context";
import './Cart.css'

export default function Cart() {

  const { cart, total, formatNumber } = MyCartContext();
  if(cart.length===0){
    return (
      <div className="shopping-cart">
        <div className="empty">no item</div>
      </div>
    );
  }
    //no item

  else{
     return (
       <div className="shopping-cart">
         <div className="title">ສິນຄ້າໃນກະຕ່າ</div>

         {cart.map((data) => {
           return <CartItem key={data.id} {...data} />;
         })}
         <div className="footer">ຍອດລວມ {formatNumber(total)} ພັນ</div>
       </div>
     );
  }
 
}
