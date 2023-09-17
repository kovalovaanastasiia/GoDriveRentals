import React from 'react';
import Icons from '../../svg/icons.svg';

export const IconSvg = ({id, className}) => {
  return (
    <svg className={className}>
      <use href={Icons + '#' + id}></use>
    </svg>
  );
};
