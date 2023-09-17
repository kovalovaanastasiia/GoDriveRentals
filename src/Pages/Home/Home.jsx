import React from 'react';
import {Link} from 'react-router-dom';

import css from './Home.module.css'


export const Home = () => {

  return (
    <div className={css.container}>
      <h1 className={css.mainTitle}>Save big with our car rental</h1>
      <Link className={css.catalogLink} to={`/catalog`}>Choose your car</Link>
    </div>
  );
}
