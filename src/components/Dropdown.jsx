import React from 'react';
import classNames from "classnames";

const Dropdown = ({className, options, onChange}) => {

  const pClasses = classNames(
    'text-sm font-medium text-white-b',
  );

  const mapped = options?.map(opt =>
    <div className='flex gap-2 items-center hover:bg-dark-1b duration-200 cursor-pointer px-2 py-1'>
      {opt.icon}
      <p
        key={opt.key}
        onClick={() => onChange(opt)}
        className={pClasses}>
        {opt.name}
      </p>
    </div>
  );

  const classes = classNames(
    'bg-dark-1f rounded-lg flex flex-col',
    className
  );

  return (
    <div className={classes}>
      {mapped}
    </div>
  );
};

export default Dropdown;