import {Link} from 'react-router-dom';

import css from './ErrorPage.module.css';

export const ErrorPage = () => {
  return (
    <div className={css.errContainer}>
      <p className={css.errTitle}>Oops...This page was not found</p>
      <Link className={css.homeLink} to={'/'}>Return to main page</Link>
    </div>
  );
};
