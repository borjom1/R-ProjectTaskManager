import React from 'react';
import {MdOutlineDoneOutline} from 'react-icons/md';
import {RiLoader4Fill} from 'react-icons/ri';
import {TfiHandOpen} from 'react-icons/tfi';


const TaskStatus = ({status}) => {

  const ICON_SIZE = 24;
  let icon, bgColor;

  switch (status) {
    case 'DONE':
      icon = <MdOutlineDoneOutline color={'#ffffff'} size={ICON_SIZE}/>
      bgColor = 'bg-[#28b76d]'
      break;
    case 'IN_PROGRESS':
      icon = <RiLoader4Fill color={'#ffffff'} size={ICON_SIZE}/>
      bgColor = 'bg-[#2880b7]'
      break;
    case 'NOT_STARTED':
      icon = <TfiHandOpen color={'#ffffff'} size={ICON_SIZE}/>
      bgColor = 'bg-[#565656]'
      break;
  }

  return (
    <div className={`${bgColor} rounded-xl flex justify-center items-center py-2 px-2`}>
      {icon}
    </div>
  );
};

export default TaskStatus;