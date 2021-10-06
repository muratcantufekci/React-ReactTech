import { useDispatch } from "react-redux";
import classes from "./Card.module.css";
import { IoCashOutline } from "react-icons/io5";
import { basketActions } from "../../store";

const Card = (props) => {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(
      basketActions.increment({
        key: props.id,
        id: props.id,
        name: props.name,
        price: props.price,
        image: props.image,
        amount: 1,
      })
    );
  };

  return (
    <div className={classes.product}>
      <img
        className={classes.img}
        src={props.image}
        alt={props.description}
      ></img>
      <div className={classes.content}>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <p className={classes.price}>
          <IoCashOutline /> {props.price} TL
        </p>
        <button onClick={addToCartHandler} className={classes.btn}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
