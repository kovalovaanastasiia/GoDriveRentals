import React, {useState, useEffect} from 'react';
import {IconSvg} from "../IconSvg/IconSvg";

import css from './CarModal.module.css'


export const CarModal = ({car, isOpen, onClose}) => {
  const [isVisible, setIsVisible] = useState(isOpen);
  const addressArray = car.address.split(', ');
  const country = addressArray[addressArray.length - 1];
  const city = addressArray[addressArray.length - 2];
  const rentalConditionsArray = car.rentalConditions.split('\n');

  const closeModal = () => {
    setIsVisible(false);
    onClose();
  };

  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    if (isVisible) {
      window.addEventListener('keydown', handleEscKey);
    }

    return () => {
      window.removeEventListener('keydown', handleEscKey);
    };
  });


  if (!isVisible) {
    return null;
  }

  return (
    <div className={css.backdrop} onClick={closeModal}>
      <div className={css.modal} onClick={(e) => e.stopPropagation()}>
        <div onClick={closeModal}>
          <IconSvg id={'close'} className={css.close}/>
        </div>
        <div className={css.modalThumb}>
          <img className={css.carImage} src={car.img} alt="Car"/>
          <div className={css.carTitle}>
            {car.make}{' '}
            <span className={css.modelTitle}>{car.model}</span>,{' '}
            {car.year}
          </div>
          <ul className={css.descriptionList}>
            <div className={css.subString}>
              <li className={css.descriptionItem}>{city}</li>
              <li className={css.descriptionItem}>{country}</li>
              <li className={css.descriptionItem}>{`Id: ${car.id}`}</li>
              <li className={css.descriptionItem}>{`Year: ${car.year}`}</li>
              <li className={css.descriptionItem}>{`Type: ${car.type}`}</li>
            </div>
            <div className={css.subString}>
              <li className={css.descriptionItem}>{`Fuel Consumption: ${car.fuelConsumption}`}</li>
              <li className={css.descriptionItem}>{`Engine Size: ${car.engineSize}`}</li>
            </div>
          </ul>
          <p className={css.carOverview}>{car.description}</p>
          <h5 className={css.subTitle}>Accessories and functionalities:</h5>
          <ul className={css.subList}>
            {car.accessories.map((accessory, index) => (
              <li className={css.descriptionItem} key={`accessory_${index}`}>{accessory}</li>
            ))}
          </ul>
          <ul className={css.subList}>
            {car.functionalities.map((functionality, index) => (
              <li className={css.descriptionItem} key={`functionality_${index}`}>{functionality}</li>
            ))}
          </ul>
          <h5 className={css.subTitle}>Rental Conditions:</h5>
          <ul className={css.conditionList}>
            {rentalConditionsArray.map((item, index) => (
              <li className={css.conditionItem} key={`item_${index}`}>{item}</li>
            ))}
            <li className={css.conditionItem}>Mileage: <span
              className={css.special}>{car.mileage.toLocaleString('en-US')}</span></li>
            <li className={css.conditionItem}>Price: <span className={css.special}>{car.rentalPrice}</span></li>
          </ul>
          <a className={css.button} href="tel:+380730000000">Rental car</a>
        </div>

      </div>
    </div>
  );
};
