import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {CarAdvert} from "../../components/CarAdvert/CarAdvert";

import css from './Catalog.module.css'

export const Catalog = () => {
  const URL = 'https://6496e6dd83d4c69925a33840.mockapi.io/car_adverts';
  const [cars, setCars] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(URL);
        setCars(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <ul className={css.carsList}>
        {cars.map(car => (
          <li key={car.id}>
            <CarAdvert car={car} />
          </li>
        ))}
      </ul>
    </>
  );
}

