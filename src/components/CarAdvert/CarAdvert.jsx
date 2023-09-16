import React, {useState} from 'react';
import {IconSvg} from "../IconSvg/IconSvg";
import css from './CarAdvert.module.css'
import {CarModal} from "../CarModal/CarModal";


export const CarAdvert = ({car, favoriteCars, setFavoriteCars}) => {
  const addressArray = car.address.split(', ');
  const country = addressArray[addressArray.length - 1];
  const city = addressArray[addressArray.length - 2];
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isFavorite = favoriteCars.some(favoriteCar => favoriteCar.id === car.id);

  const toFindIndex = (storage, car) => {
    return storage.findIndex(item => item.id === car.id && item.name === car.name);
  }

  const toggleFavorite = (car) => {
    const storage = JSON.parse(localStorage.getItem("favoriteCars")) || [];
    const foundIndex = toFindIndex(storage, car);
    if (foundIndex === -1) {
      storage.push(car);
    } else {
      storage.splice(foundIndex, 1);
    }
    setFavoriteCars(storage);
    localStorage.setItem("favoriteCars", JSON.stringify(storage));
  }

  const openModal = () => {
    setIsModalOpen(true);
    document.body.classList.add('scrollLock');
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.classList.remove('scrollLock');
  };

  let functionality = car.functionalities[0];
  for (let i = 0; i < car.functionalities.length; i++) {
    if (car.functionalities[i].length < functionality.length) {
      functionality = car.functionalities[i]
    }
  }

  return (<>
    <div className={css.cardThumb}>
      <div className={css.imageThumb}>
        <img className={css.carImage} src={car.img} alt="Car"/>
        <button className={css.favoriteBtn} type='button' onClick={() => {
          toggleFavorite(car)
        }}>
          <IconSvg id={'heart'} className={isFavorite ? css.favoriteIcon : css.heartIcon}
          />
        </button>
      </div>
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
      <button className={css.button} type='button' onClick={openModal}>
        Learn more
      </button>
    </div>
    {isModalOpen ? <CarModal key={car.id} car={car} isOpen={isModalOpen} onClose={closeModal}/> : ''}
  </>);
};
