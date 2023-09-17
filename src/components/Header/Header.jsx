import {NavLink} from "react-router-dom";

import css from "./Header.module.css"


export const Header = () => {
  return (
    <header className={css.headerContainer}>
      <nav className={css.navigation}>
        <NavLink className={css.navLink} to="/">Home</NavLink>
        <NavLink className={css.navLink} to="/catalog">Catalog</NavLink>
        <NavLink className={css.navLink} to="/favorites">Favorites</NavLink>
      </nav>
    </header>
  );
};
