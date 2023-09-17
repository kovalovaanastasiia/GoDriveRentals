import {useEffect, useRef, useState} from "react";
import css from "./PriceInput.module.css";
import {IconSvg} from "../IconSvg/IconSvg";

export const PriceInput = ({ priceFilter, setPriceFilter }) => {
  const [showPriceList, setShowPriceList] = useState(false);
  const containerRef = useRef(null);

  const priceList = Array.from({ length: 50 }, (_, index) => (index + 1) * 10);


  const handleClosePriceList = () => {
    setShowPriceList(false);
  };
  const handlePriceClick = (price) => {
    setPriceFilter(price);
    handleClosePriceList();
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        handleClosePriceList();
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className={css.inputThumb} ref={containerRef}>
        <label htmlFor="priceInput" className={css.label}>
          Price/ 1 hour
        </label>
        <div className={css.inputWithIcon}>
          <input
            className={css.input}
            type="text"
            id="priceInput"
            placeholder="To $"
            value={priceFilter}
            onChange={(e) => setPriceFilter(e.target.value)}
            onClick={() => setShowPriceList(!showPriceList)}
          />
          {
            showPriceList ?
              <button className={css.inputBtn} type='button' onClick={() => setShowPriceList(false)}>
                <IconSvg id={'arrowUp'} className={css.inputIcon}/></button>
              :
              <button className={css.inputBtn} type='button' onClick={() => setShowPriceList(true)}>
                <IconSvg id={'arrowDown'} className={css.inputIcon}/></button>
          }
        </div>

        {showPriceList && (
          <ul className={css.priceList}>
            {priceList.map((price) => (
              <li
                key={price}
                className={css.priceItem}
                onClick={() => handlePriceClick(price)}
              >
                {price}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};
