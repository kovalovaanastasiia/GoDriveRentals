import React, {useEffect, useState} from 'react';
import {CarAdvert} from "../../components/CarAdvert/CarAdvert";
import {Loader} from "../../components/Loader/Loader";
import {getAllCars} from "../../services/api";
import {BrandInput} from "../../components/BrandInput/BrandInput";
import {PriceInput} from "../../components/PriceInput/PriceInput";
import {MileageInput} from "../../components/MileageInput/MileageInput";

import css from './Catalog.module.css'


export const Catalog = () => {
  const [cars, setCars] = useState([]);
  const [favoriteCars, setFavoriteCars] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState({currentPage: 1, pageSize: 8});
  const [brandFilter, setBrandFilter] = useState('');
  const [priceFilter, setPriceFilter] = useState('');
  const [minMileage, setMinMileage] = useState('');
  const [maxMileage, setMaxMileage] = useState('');


  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setError(null);
        const response = await getAllCars();
        setCars(response);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();

    const storedFavorites =
      JSON.parse(localStorage.getItem('favoriteCars')) || [];
    setFavoriteCars(storedFavorites);
  }, []);

  const loadMoreCars = () => {
    setPagination((prevPagination) => ({
      currentPage: prevPagination.currentPage + 1,
      pageSize: prevPagination.pageSize,
    }));
  };

  const filteredCars = cars.filter((car) => {
    const makeMatch = car.make.toLowerCase().includes(brandFilter.toLowerCase());
    const priceMatch = !priceFilter || Number(car.rentalPrice.slice(1)) <= Number(priceFilter);
    const mileage = car.mileage;
    const minMileageMatch = !minMileage || mileage >= minMileage;
    const maxMileageMatch = !maxMileage || mileage <= maxMileage;


    return makeMatch && priceMatch && minMileageMatch && maxMileageMatch;
  });


  const visibleCars = filteredCars.slice(
    0,
    pagination.currentPage * pagination.pageSize
  );


  return (
    <div className={css.container}>
      {loading && <Loader/>}
      {error && <p>{error}</p>}
      <div className={css.inputsContainer}>
        {!loading && (<BrandInput cars={cars}
                                  brandFilter={brandFilter}
                                  setBrandFilter={setBrandFilter}/>)}
        {!loading && (<PriceInput priceFilter={priceFilter}
                                  setPriceFilter={setPriceFilter}/>)}
        {!loading && (<MileageInput minMileage={minMileage}
                                    maxMileage={maxMileage}
                                    setMinMileage={setMinMileage}
                                    setMaxMileage={setMaxMileage}/>)}
      </div>
      {visibleCars?.length > 0 ? (
        <ul className={css.carsList}>
          {visibleCars.map((car) => (
            <li key={car.id}>
              <CarAdvert
                car={car}
                favoriteCars={favoriteCars}
                setFavoriteCars={setFavoriteCars}
              />
            </li>
          ))}
        </ul>
      ) : (
       !loading && <p className={css.emptyMsg}>No matching cars found.</p>
      )}
      {visibleCars.length < filteredCars.length && (
        <button className={css.loadMoreBtn} type="button" onClick={loadMoreCars}>
          Load more
        </button>
      )}
    </div>
  );
};
