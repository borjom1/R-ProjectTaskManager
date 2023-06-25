import React from 'react';
import classNames from "classnames";

const Mark = ({onClick, text, bgColor, textColor, state, medium}) => {

  const bgClasses = classNames(
    medium ? 'px-4 py-0.5' : 'px-2',
    'w-min rounded-lg cursor-pointer',
    `bg-${state ? `[${bgColor}]` : 'dark-15'}`,
    'hover:bg-dark-42 duration-200'
  );

  const textClasses = classNames(
    medium ? 'text-sm' : 'text-xs',
    'font-medium py-[2px]',
    `text-${state ? `[${textColor}]` : 'white-f0'}`
  );

  return (
    <div
      onClick={onClick}
      className={bgClasses}>
      <p className={textClasses}>
        {text}
      </p>
    </div>
  );
};

export default Mark;