import React from 'react';
import avatar from "../assets/avatar.png";
import classNames from "classnames";

const User = ({className, offBg, role, userAvatar, fullName, login}) => {

  const divClasses = classNames(
    'w-full py-2 px-10 flex gap-3 items-center',
    !offBg && 'bg-dark-31 rounded-t-[30px]',
    className
  );

  return (
    <div className={divClasses}>
      <img src={userAvatar || avatar} alt='avatar' width={45} className='rounded-full'/>
      <div>
        <div className='flex gap-2 items-center'>
          <p className='text-white-f0 text-lg leading-none'>{fullName}</p>
          {role}
        </div>
        <p className='mt-1 text-gray-7d text-xs font-medium leading-none'>{login}</p>
      </div>
    </div>
  );
};

export default User;