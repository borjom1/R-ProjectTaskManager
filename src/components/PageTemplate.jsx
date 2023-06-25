import React from 'react';
import classNames from "classnames";

export default function PageTemplate({
  children, lrClassName,
  lowerRight, lrHeight, urClassName, urHeight,
  upperRight
}) {

  const borderStyles = classNames(
    'w-[85%] h-[90%] flex gap-4',
    'border-4 border-dark-26 rounded-[30px]',
    'p-4'
  );

  const urClasses = classNames('w-full', urHeight || 'h-2/5', urClassName);
  const lrClasses = classNames('w-full', lrHeight || 'h-3/5', lrClassName);

  return (
    <div className='bg-dark-1a w-full h-[100vh] flex justify-center items-center'>
      <div className={borderStyles}>
        <div className='w-[65%] h-full'>
          {children}
        </div>
        <div className='w-[35%] h-full flex flex-col gap-4'>
          <div className={urClasses}>
            {upperRight}
          </div>
          <div className={lrClasses}>
            {lowerRight}
          </div>
        </div>
      </div>
    </div>
  );
}