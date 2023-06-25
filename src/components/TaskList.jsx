import React from 'react';
import TaskItem from "./TaskItem";
import {AiFillAlert} from "react-icons/ai";
import {getUserWith} from "../services/api/userApi";
import {getUser} from "../utils/localstorage";

const TaskList = ({className, tasks, setTasks, userAvatars, selectedStory}) => {

  const list = tasks?.map(task => {

    const handleAssign = (targetTaskId, userId) => {
      getUserWith(getUser().access).then(data => {
        const targetTask = tasks.find(e => e.id === targetTaskId);
        targetTask.assignedUserId = userId;
        targetTask.assignedFullName = data.data.fullName;
        setTasks([...tasks]);
      });
    };

    const handleChangeStatus = (targetTaskId, status) => {
      const targetTask = tasks.find(e => e.id === targetTaskId);
      targetTask.status = status;
      setTasks([...tasks]);
    };

      return (
        <TaskItem
          selectedStory={selectedStory}
          setAssign={handleAssign}
          handleChangeStatus={handleChangeStatus}
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
    }
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