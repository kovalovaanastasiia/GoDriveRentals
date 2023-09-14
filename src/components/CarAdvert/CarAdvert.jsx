import React, {useState} from 'react';

import css from './CarAdvert.module.css'
import {CarModal} from "../CarModal/CarModal";


export const CarAdvert = ({car}) => {
  const addressArray = car.address.split(', ');
  const country = addressArray[addressArray.length - 1];
  const city = addressArray[addressArray.length - 2];
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    console.log("isOpen")
    setIsModalOpen(true);
  };

  const closeModal = () => {
    console.log("isClose")
    setIsModalOpen(false);
  };

  let functionality = car.functionalities[0];
  for (let i = 0; i < car.functionalities.length; i++) {
    if (car.functionalities[i].length < functionality.length) {
      functionality = car.functionalities[i]
    }
  }

  return (
    <>
      <div className={css.cardThumb}>
        <img className={css.carImage} src={car.img} alt="Car"/>
        <div className={css.carTitle}>
          <div>
            {car.make}{' '}
            <span className={css.modelTitle}>{car.model}</span>,{' '}
            {car.year}
          </div>
          <span>{car.rentalPrice}</span>
        </div>
        <ul className={css.descriptionList}>
          <div className={css.subString}>
          <li className={css.descriptionItem}>{city}</li>
          <li className={css.descriptionItem}>{country}</li>
          <li className={css.descriptionItem}>{car.rentalCompany}</li>
          </div>
          <div className={css.subString}>
            <li className={css.descriptionItem}>{car.type}</li>
            <li className={css.descriptionItem}>{car.model}</li>
            <li className={css.descriptionItem}>{car.mileage.toLocaleString('en-US')}</li>
            <li className={css.descriptionItem}>{functionality}</li>
          </div>
        </ul>
        <button className={css.button} onClick={openModal}>
          Learn more
        </button>
        </div>
      {isModalOpen ? <CarModal car={car} isOpen={isModalOpen} onClose={closeModal} /> : ''}
    </>
  );
};
