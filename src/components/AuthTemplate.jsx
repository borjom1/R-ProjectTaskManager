import React from 'react';
import classNames from "classnames";
import '../index.css';
import { Button } from '@mui/material';

export default function AuthTemplate({children, label, text, button, alert}) {

  const borderStyles = classNames(
    'w-3/5 h-3/5 items-center',
    'flex',
    'border-4 border-dark-26 rounded-[30px]'
  );

  const buttonStyle = 'w-[35%] rounded-[30px] border-2 mt-10';

  return (
    <div className='bg-dark-1a w-full h-[100vh] flex justify-center items-center'>
      <div className={borderStyles}>
        <div className='w-2/5 flex flex-col items-center'>
          <p className='text-white-f0 text-2xl font-semibold text-center'>{text?.title}</p>
          <p className='text-white-b text-sm text-center mt-4'>{text?.fLine}</p>
          <p className='text-white-b text-sm text-center'>{text?.sLine}</p>
          <Button
            className={buttonStyle}
            onClick={button?.onClick}
            variant='outlined'
            style={{
              borderColor: '#3AA6AD',
              color: '#3AA6AD',
            }}>
            {button?.label}
          </Button>
        </div>
        <div className='w-3/5 h-full bg-dark-24 rounded-[25px]'>
          <div className='bg-dark-31 rounded-t-[25px] py-4'>
            <p className='text-white-f0 text-2xl font-medium text-center'>{label}</p>
          </div>
          {alert}
          <div className='mt-12 flex flex-col gap-4 items-center'>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};