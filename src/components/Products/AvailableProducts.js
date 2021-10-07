import React, { useEffect, useState } from "react";
import Card from "../UI/Card";
import classes from "./AvailableProducts.module.css";

const AvailableProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://react-tech-c3143-default-rtdb.firebaseio.com/products.json")
      .then((response) => response.json())
      .then((response) => setProducts(response));
  }, []);

  const filtredProducts = products.filter((x) => x);

  const laptopFilter = filtredProducts.filter(
    (product) => product.category === "Laptop"
  );

  const phoneFilter = filtredProducts.filter(
    (product) => product.category === "Phone"
  );

  const tabletFilter = filtredProducts.filter(
    (product) => product.category === "Tablet"
  );

  const laptopList = laptopFilter.map((product) => (
    <Card
      key={product.id}
      id={product.id}
      name={product.name}
      description={product.description}
      price={product.price}
      image={product.image}
    />
  ));

  const phoneList = phoneFilter.map((product) => (
    <Card
      key={product.id}
      id={product.id}
      name={product.name}
      description={product.description}
      price={product.price}
      image={product.image}
    />
  ));

  const tabletList = tabletFilter.map((product) => (
    <Card
      key={product.id}
      id={product.id}
      name={product.name}
      description={product.description}
      price={product.price}
      image={product.image}
    />
  ));

  return (
    <React.Fragment>
      <section id="laptops" className={classes.section}>
        <div className={classes.container}>
          <h2 className={classes.h2}>Laptops</h2>
        </div>
        <div className={classes.grid}>{laptopList}</div>
      </section>

      <section id="mobile" className={classes.section}>
        <div className={classes.container}>
          <h2 className={classes.h2}>Phones</h2>
        </div>
        <div className={classes.grid}>{phoneList}</div>
      </section>

      <section id="tablets" className={classes.section}>
        <div className={classes.container}>
          <h2 className={classes.h2}>Tablets</h2>
        </div>
        <div className={classes.grid}>{tabletList}</div>
      </section>
    </React.Fragment>
  );
};

export default AvailableProducts;
