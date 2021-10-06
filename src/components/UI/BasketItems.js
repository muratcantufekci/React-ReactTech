import classes from "./BasketItems.module.css";
import { IoRemoveCircleOutline, IoAddCircleOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { basketActions } from "../../store";

import { useState, useEffect } from "react";

const BasketItems = (props) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://react-tech-c3143-default-rtdb.firebaseio.com/products.json")
      .then((response) => response.json())
      .then((response) => setProducts(response));
  }, []);

  const filtredProducts = products.filter((x) => x);

  const dispatch = useDispatch();

  const addItemHandler = () => {
    dispatch(
      basketActions.increment({
        key: props.id,
        id: props.id,
        price: filtredProducts[props.id - 1].price,
        amount: 1,
      })
    );
  };

  const removeItemHandler = () => {
    dispatch(
      basketActions.decrement({
        key: props.id,
        id: props.id,
        price: filtredProducts[props.id - 1].price,
        amount: 1,
      })
    );
  };
  const price = `$${Number(props.price).toFixed(2)}`;

  return (
    <div className={classes.container}>
      <li className={classes.list}>
        <div className={classes.elements}>
          <span className={classes.name}>{props.name}</span>
          <img className={classes.image} src={props.image} alt={props.name} />
          <span className={classes.amount}>Amount: {props.amount} </span>
          <div>
            {" "}
            <IoAddCircleOutline
              className={classes.icon}
              onClick={addItemHandler}
            />{" "}
            <IoRemoveCircleOutline
              className={classes.icon}
              onClick={removeItemHandler}
            />
          </div>
          <span className={classes.price}>Price: {price}</span>
        </div>
      </li>
    </div>
  );
};

export default BasketItems;
