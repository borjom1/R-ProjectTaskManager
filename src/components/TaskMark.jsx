import React from 'react';
import classNames from "classnames";

const TaskMark = ({mark}) => {

  let textClasses, bgClasses;

  switch (mark) {
    case 'BACKEND':
      bgClasses = 'bg-[#4D3511]'
      textClasses = 'text-[#EE9E28]'
      break;
    case 'FRONTEND':
      bgClasses = 'bg-[#5B123E]'
      textClasses = 'text-[#EF37A5]'
      break;
    case 'DATA':
      bgClasses = 'bg-[#0D5626]'
      textClasses = 'text-[#1FD75E]'
      break;
    case 'DESIGN':
      bgClasses = 'bg-[#2E164C]'
      textClasses = 'text-[#9044F0]'
      break;
    case 'ANALYTICS':
      bgClasses = 'bg-[#162C4C]'
      textClasses = 'text-[#446AF0]'
      break;
  }

  return (
    <div className={classNames('w-min px-2 rounded-lg', bgClasses)}>
      <p className={classNames('text-xs font-medium py-[3px] leading-none', textClasses)}>
        {mark[0].toUpperCase() + mark.slice(1).toLowerCase()}
      </p>
    </div>
  );
};

export default TaskMark;