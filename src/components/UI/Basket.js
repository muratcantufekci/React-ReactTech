import React from "react";
import { useSelector } from "react-redux";
import classes from "./Basket.module.css";
import BasketItems from "./BasketItems";

const Basket = () => {
  const totalPrice = useSelector((state) => `$${state.totalPrice.toFixed(2)}`);

  const basketItems = useSelector((state) => state.items);
  const itemToPrint = basketItems.map((item) => (
    <BasketItems
      key={item.id}
      id={item.id}
      name={item.name}
      price={item.price}
      amount={item.amount}
      image={item.image}
    />
  ));

  return (
    <div className={classes.basket}>
      {itemToPrint}
      <span className={classes.totalPrice}>Total Price: {totalPrice} TL</span>
    </div>
  );
};

export default Basket;
