import React from 'react';
import TaskItem from "./TaskItem";
import {AiFillAlert} from "react-icons/ai";

const TaskList = ({className, tasks, userAvatars}) => {

  const list = tasks?.map(task =>
    <TaskItem
      key={task.id}
      id={task.id}
      title={task.title}
      status={task.status}
      loadedAvatar={userAvatars.find(e => e.id === task.assignedUserId)?.avatar}
      assignedUserId={task.assignedUserId}
      assignedFullName={task.assignedFullName}
      marks={task.marks}
    />
  );

  return (
    <div className={className}>
      {tasks.length ? list :
        <div className='flex flex-col items-center mt-20'>
          <AiFillAlert size={75} color={'#3d3d3d'}/>
          <p className='text-[#3d3d3d] text-2xl font-bold'>There are no tasks yet</p>
        </div>
      }
    </div>
  );
};

export default TaskList;