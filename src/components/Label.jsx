import React from 'react';

export default function Label({name, icon, value}) {
  return (
    <div className='bg-dark-21 flex gap-3 items-center py-1 px-4 rounded-md justify-between'>
      <div className='flex items-center gap-1'>
        {icon}
        <p className='text-gray-7d text-xs'>{name}</p>
      </div>
      <p className='text-gray-c9'>{value}</p>
    </div>
  );
}