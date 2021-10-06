import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { basketActions } from "../../store";
import classes from "./HeaderButton.module.css";
import { IoBasketOutline } from "react-icons/io5";

const HeaderButton = () => {
  const dispatch = useDispatch();
  const totalAmount = useSelector((state) => state.totalAmount);

  const onClickHandler = () => {
    dispatch(basketActions.toggle());
  };

  return (
    <React.Fragment>
      <button onClick={onClickHandler} className={classes.btn}>
        <IoBasketOutline className={classes.icon} />
        <span className={classes.badge}>{totalAmount}</span>
      </button>
    </React.Fragment>
  );
};

export default HeaderButton;
