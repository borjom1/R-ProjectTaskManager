import React from 'react';
import { TiKey } from 'react-icons/ti';
import { TbAward } from 'react-icons/tb';

export default function Role({variant}) {

  const vars = {
    manager: {
      text: 'Manager',
      bgColor: 'bg-cyan-2f',
      icon: <TbAward size={20} color={'#F0F0F0'}/>
    },
    admin: {
      text: 'Admin',
      bgColor: 'bg-pink',
      icon: <TiKey size={20} color={'#F0F0F0'}/>
    }
  };

  return (
    <div className={`${vars[variant]?.bgColor} rounded-full px-2 flex items-center`}>
      {vars[variant]?.icon}
      <p className='text-xs font-medium text-white-f0 leading-none'>{vars[variant]?.text}</p>
    </div>
  );
}