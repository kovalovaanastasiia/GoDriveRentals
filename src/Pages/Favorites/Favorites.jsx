import React, {useState} from 'react';
import css from "../Catalog/Catalog.module.css";
import {CarAdvert} from "../../components/CarAdvert/CarAdvert";
import {Loader} from "../../components/Loader/Loader";

export const Favorites = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [favoriteCars, setFavoriteCars] = React.useState(
    JSON.parse(localStorage.getItem('favoriteCars')) || []
  );

  const removeFromFavorites = (index) => {
    try {
      const updatedFavoriteCars = [...favoriteCars];
      updatedFavoriteCars.splice(index, 1);
      localStorage.setItem('favoriteCars', JSON.stringify(updatedFavoriteCars));
      setFavoriteCars(updatedFavoriteCars);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }
  return (
    <>
      {loading && <Loader />}
      {error && <p>{error}</p>}
      <ul className={css.carsList}>
        { favoriteCars?.length > 0 ? (
          favoriteCars.map(favoriteCar => (
            <li key={favoriteCar.id}>
              <CarAdvert car={favoriteCar} favoriteCars={favoriteCars} setFavoriteCars={removeFromFavorites}/>
            </li>
          ))
        ) : (
          <li>
            <p className={css.emptyMsg}>Your favorite cars list is empty. Please add some cars to your favorites.</p>
          </li>
        )}
      </ul>
    </>
  );
}
