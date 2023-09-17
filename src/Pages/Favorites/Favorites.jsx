import React, {useState} from 'react';
import css from "../Catalog/Catalog.module.css";
import {CarAdvert} from "../../components/CarAdvert/CarAdvert";
import {Loader} from "../../components/Loader/Loader";

export const Favorites = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState({currentPage: 1, pageSize: 8});
  const [favoriteCars, setFavoriteCars] = React.useState(
    JSON.parse(localStorage.getItem('favoriteCars')) || []
  );

  const loadMoreCars = () => {
    setPagination((prevPagination) => ({
      currentPage: prevPagination.currentPage + 1,
      pageSize: prevPagination.pageSize,
    }));
  };
  const visibleCars = favoriteCars.slice(0,pagination.currentPage * pagination.pageSize);
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
        { visibleCars?.length > 0 ? (
          visibleCars.map(visibleCar => (
            <li key={visibleCar.id}>
              <CarAdvert car={visibleCar} favoriteCars={favoriteCars} setFavoriteCars={removeFromFavorites}/>
            </li>
          ))
        ) : (
          <li>
            <p className={css.emptyMsg}>Your favorite cars list is empty. Please add some cars to your favorites.</p>
          </li>
        )}
      </ul>
      {visibleCars.length < favoriteCars.length && (
        <button className={css.loadMoreBtn} type="button" onClick={loadMoreCars}>
          Load more
        </button>
      )}
    </>
  );
}
