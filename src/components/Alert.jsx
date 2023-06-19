import React from 'react';
import { BiErrorCircle } from 'react-icons/bi';
import { BiError } from 'react-icons/bi';
import { MdDoneAll } from 'react-icons/md';
import classNames from "classnames";


export default function Alert({className, type, text}) {

  const types = {
    success: {
      icon: <MdDoneAll size={22} color={'#58a25c'}/>,
      textColor: '#7f9280',
      borderColor: '#407743',
      backgroundColor: '#0c130d'
    },
    error: {
      icon: <BiErrorCircle size={22} color={'#af3128'}/>,
      textColor: '#f4c7c7',
      borderColor: '#80241d',
      backgroundColor: '#160b0b'
    },
    warn: {
      icon: <BiError size={22} color={'#d78e21'}/>,
      textColor: '#b6a07f',
      borderColor: '#9d681a',
      backgroundColor: '#191207'
    }
  };

  const classes = classNames(
    className,
    'flex gap-3 py-1 px-6 items-center rounded-lg'
  );

  const styles = {
    backgroundColor: types[type].backgroundColor,
    borderWidth: 2,
    borderColor: types[type].borderColor,
    borderRadius: '20px'
  };

  return (
    <div className={classes} style={styles}>
      {types[type].icon}
      <p style={{color: types[type].textColor}}>{text}</p>
    </div>
  );
};