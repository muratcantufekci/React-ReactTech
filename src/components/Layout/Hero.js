import { useSelector } from "react-redux";
import heroImage from "../../images/hero.jpg";
import classes from "./Hero.module.css";
import Basket from "../UI/Basket";

const Hero = () => {
  const toggle = useSelector((state) => state.showBasket);
  return (
    <section className={classes.section}>
      {toggle && <Basket />}
      <div className={classes.hero}>
        <div>
          <h1 className={classes.h1}>
            Buy the latest technology products at the best price
          </h1>
          <p className={classes.p}>
            ReactTech offers you best prices, trustworty products and latest
            technologies.
          </p>
        </div>
        <div>
          <img
            className={classes.img}
            src={heroImage}
            alt="Technological products"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
