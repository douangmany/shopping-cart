// ສ້າງ context api ໃຫ້ບໍລິການຂໍ້ມູນໃນ component app

import { createContext, useContext, useEffect, useReducer } from "react";
import CartData from "../Components/data/CartData";
import Reducer from "./Reducer";

const initState = {
  cart: CartData,
  total: 0,
  amount: 0,
};

const CartContext = createContext();

export const MyCartContext = () => {
  return useContext(CartContext);
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initState);

  useEffect(() => {
    dispatch({type: 'CALCULATE_TOTAL'})
  }, [state.cart]);

  const removeItem = (id) => {
    console.log(id);
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };
  const formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };

  const toggleQuantity = (id, type) => {
    dispatch({type:"TOGGLE_QUANTITY",payload:{id,type}})
  };
  return (
    <CartContext.Provider
      value={{ ...state, removeItem, toggleQuantity, formatNumber }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
