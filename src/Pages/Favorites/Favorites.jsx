import React from 'react';
import css from "../Catalog/Catalog.module.css";
import {CarAdvert} from "../../components/CarAdvert/CarAdvert";

export const Favorites = () => {
  const [favoriteCars, setFavoriteCars] = React.useState(
    JSON.parse(localStorage.getItem('favoriteCars')) || []
  );

  const removeFromFavorites = (index) => {
    const updatedFavoriteCars = [...favoriteCars];
    updatedFavoriteCars.splice(index, 1);

    localStorage.setItem('favoriteCars', JSON.stringify(updatedFavoriteCars));
    setFavoriteCars(updatedFavoriteCars);
  };
  return (
    <>
      <ul className={css.carsList}>
        {favoriteCars.map(favoriteCar => (
          <li key={favoriteCar.id}>
            <CarAdvert car={favoriteCar} favoriteCars={favoriteCars} setFavoriteCars={removeFromFavorites}/>
          </li>
        ))}
      </ul>
    </>
  );
}
