import React from 'react';
import classNames from "classnames";

export default function Indicator({icon, number}) {

  const classes = classNames(
    'flex items-center gap-1',
    'py-[3px] px-[10px]',
    'border-gray-c9 border-2 rounded-[30px]',
    'hover:bg-dark-31 duration-300 hover:scale-105'
  );

  return (
    <div className={classes}>
      {icon}
      <p className='text-gray-c9 text-sm leading-none cursor-default'>{number}</p>
    </div>
  );
}