import React from "react";
import classes from "./Header.module.css";
import HeaderButton from "./HeaderButton";

const Header = () => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1 className={classes.h1}>React Tech</h1>

        <nav>
          <ul className={classes["nav-list"]}>
            <li>
              <a className={classes["nav-list-link"]} href="#/">
                Laptop
              </a>
            </li>
            <li>
              <a className={classes["nav-list-link"]} href="#/">
                Tablet
              </a>
            </li>
            <li>
              <a className={classes["nav-list-link"]} href="#/">
                Mobile Phone
              </a>
            </li>
            <li>
              <a className={classes["nav-list-link"]} href="#/">
                Contacts
              </a>
            </li>
          </ul>
        </nav>
        <HeaderButton />
      </header>
    </React.Fragment>
  );
};

export default Header;
