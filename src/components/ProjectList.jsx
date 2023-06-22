import React from 'react';
import ProjectItem from "./ProjectItem";

const ProjectList = ({className, projects}) => {

  const list = projects?.map(p =>
    <ProjectItem
      key={p.id}
      id={p.id}
      title={p.title}
      desc={p.desc}
      people={p.people}
      tasksDone={p.tasksDone}
      tasksUnDone={p.tasksUnDone}
    />
  );

  return (
    <div className={className}>
      {list}
    </div>
  );
};

export default ProjectList;