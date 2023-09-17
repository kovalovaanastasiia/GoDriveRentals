import {useEffect, useRef, useState} from "react";
import {IconSvg} from "../IconSvg/IconSvg";

import css from "./BrandInput.module.css";

export const BrandInput = ({cars, brandFilter, setBrandFilter}) => {
  const [showBrandList, setShowBrandList] = useState(false);
  const [brandList, setBrandList] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const uniqueBrands = [...new Set(cars.map((car) => car.make))];
    setBrandList(uniqueBrands);
  }, [cars]);

  const handleCloseBrandList = () => {
    setShowBrandList(false);
  };

  const handleOnChange = (event) => {
    setBrandFilter(event.target.value);
    handleCloseBrandList()
  }
  const handleBrandClick = (brand) => {
    setBrandFilter(brand);
    handleCloseBrandList();
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        handleCloseBrandList();
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
        <label htmlFor="brandInput" className={css.label}>
          Car brand
        </label>
        <div className={css.inputWithIcon}>
          <input
            className={css.input}
            type="text"
            id="brandInput"
            placeholder="Enter the text"
            value={brandFilter}
            onChange={handleOnChange}
            onClick={() => setShowBrandList(!showBrandList)}
          />
          {
            showBrandList ?
              <button className={css.inputBtn} type='button' onClick={() => setShowBrandList(false)}>
                <IconSvg id={'arrowUp'} className={css.inputIcon}/></button>
              :
              <button className={css.inputBtn} type='button' onClick={() => setShowBrandList(true)}>
                <IconSvg id={'arrowDown'} className={css.inputIcon}/></button>
          }
        </div>

        {showBrandList && (
          <ul className={css.brandList}>
            {brandList.map((brand) => (
              <li
                key={brand}
                className={css.brandItem}
                onClick={() => handleBrandClick(brand)}
              >
                {brand}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>

  )
    ;
};
