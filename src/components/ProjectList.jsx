import React from 'react';
import ProjectItem from "./ProjectItem";
import {AiFillAlert } from 'react-icons/ai';

const ProjectList = ({className, projects}) => {

  const list = projects?.map(p =>
    <ProjectItem
      key={p.id}
      id={p.id}
      title={p.name}
      desc={p.description}
      people={p.members}
      tasksDone={p.tasksCompleted + ''}
      tasksUnDone={p.tasksInProcess + ''}
    />
  );

  return (
    <div className={className}>
      {list.length > 0 ? list :
        <div className='flex flex-col items-center mt-20'>
          <AiFillAlert size={75} color={'#151515'}/>
          <p className='text-dark-15 text-2xl font-bold'>You are not participating in any projects yet</p>
        </div>
      }
    </div>
  );
};

export default ProjectList;