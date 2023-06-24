import React from 'react';
import TaskMark from "./TaskMark";
import avatar from '../assets/avatar.png';
import TaskStatus from "./TaskStatus";
import { AiOutlinePushpin } from 'react-icons/ai';

const TaskItem = ({id, title, status, assignedUserId, assignedFullName, marks}) => {

  const mappedMarks = marks?.map(mark => <TaskMark key={mark} mark={mark}/>);
  const isAssigned = assignedUserId && assignedFullName;

  return (
    <div className='w-full bg-dark-1b rounded-xl py-3 px-6'>
      <p className='text-lg text-gray-c9 font-medium'>{title}</p>
      <div className='flex gap-2 mt-2'>
        {mappedMarks}
      </div>
      <div className='w-full flex justify-between items-center mt-3'>
        <div className='bg-dark-22 rounded-lg flex gap-3 items-center py-1 px-3'>
          <AiOutlinePushpin size={22} color={'#4B4B4B'}/>
          <p className='text-sm text-[#4B4B4B]'>{isAssigned ? 'Assigned to' : 'Not assigned'}</p>
          {isAssigned && <img className='rounded-full' src={avatar} alt={'avatar'} width={23}/>}
          {isAssigned && <p className='text-white-b'>{assignedFullName}</p>}
        </div>
        {<TaskStatus status={status}/>}
      </div>
    </div>
  );
};

export default TaskItem;