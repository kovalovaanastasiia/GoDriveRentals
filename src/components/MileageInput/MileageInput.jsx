import css from "./MileageInput.module.css"


export const MileageInput = ({minMileage, maxMileage, setMinMileage, setMaxMileage}) => {

  const handleMinMileageChange = e => {
    setMinMileage(e.target.value);
  };

  const handleMaxMileageChange = e => {
    setMaxMileage(e.target.value);
  };

  return (
    <>
      <div className={css.inputThumb}>
        <label htmlFor="mileageInput" className={css.label}>
          Сar mileage / km
        </label>
        <div className={css.inputsGroup}>
          <input
            className={css.input}
            type="text"
            id="minMileage"
            placeholder="From"
            value={minMileage}
            onChange={handleMinMileageChange}
          />
          <input
            className={css.input}
            type="text"
            id="maxMileage"
            placeholder="To"
            value={maxMileage}
            onChange={handleMaxMileageChange}
          />
        </div>
      </div>
    </>
  );
};
