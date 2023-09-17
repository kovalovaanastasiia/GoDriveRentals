import css from './Loader.module.css'

export const Loader = () => {
  return <div className={css.styledLoader}>
    <div className={css.ldsSpinner}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>;

};
