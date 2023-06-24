import React from 'react';
import {FaListUl} from 'react-icons/fa';
import {CgTimelapse} from 'react-icons/cg';
import classNames from "classnames";

const StoryItem = ({id, name, tasks, from, to, onClick}) => {

  const divClasses = classNames(
    'w-full bg-dark-1f rounded-lg py-3 px-8 flex justify-between items-center',
    'hover:scale-[1.01] duration-300 cursor-pointer',
  );

  return (
    <div className={divClasses} onClick={() => onClick()}>
      <p className='text-white-f0 text-xl'>{name}</p>
      <div className='flex gap-6 items-center'>
        <div className='flex gap-2 items-center'>
          <FaListUl size={16} color={'#838383'}/>
          <p className='text-[#838383]'>{tasks}</p>
        </div>
        <div className='flex gap-1 items-center'>
          <CgTimelapse size={18} color={'#515151'}/>
          <p className='text-[#515151]'>{`${from.replaceAll('-', '.')} - ${to.replaceAll('-', '.')}`}</p>
        </div>
      </div>
    </div>
  );
};

export default StoryItem;