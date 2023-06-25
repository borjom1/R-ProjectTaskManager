import React, {useState} from 'react';
import {MdOutlineDoneOutline} from 'react-icons/md';
import {RiLoader4Fill} from 'react-icons/ri';
import {TfiHandOpen} from 'react-icons/tfi';
import Dropdown from "../Dropdown";

const TaskStatus = ({status, handleSelect}) => {

  const [isOpened, setOpened] = useState(false);

  const ICON_SIZE = 24;

  const STATUSES = [
    {
      key: 'DONE',
      name: 'Done',
      icon: <MdOutlineDoneOutline color={'#ffffff'} size={ICON_SIZE}/>,
      bgColor: 'bg-[#28b76d]'
    },
    {
      key: 'IN_PROGRESS',
      name: 'In progress',
      icon: <RiLoader4Fill color={'#ffffff'} size={ICON_SIZE}/>,
      bgColor: 'bg-[#2880b7]'
    },
    {
      key: 'NOT_STARTED',
      name: 'Not started',
      icon: <TfiHandOpen color={'#ffffff'} size={ICON_SIZE}/>,
      bgColor: 'bg-[#565656]'
    }
  ];

  const foundStatus = STATUSES.find(e => e.key === status);

  return (
    <div
      onClick={() => setOpened(!isOpened)}
      className={`${foundStatus.bgColor} rounded-xl flex justify-center items-center py-2 px-2 cursor-pointer hover:scale-[1.04] duration-300 relative`}>
      {foundStatus.icon}
      {isOpened &&
        <Dropdown
          className='absolute w-max py-2 bg-dark-42'
          options={STATUSES}
          onChange={opt => handleSelect(opt)}
        />
      }
    </div>
  );
};

export default TaskStatus;