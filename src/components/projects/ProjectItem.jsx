import React from 'react';
import {RiGroupFill} from 'react-icons/ri';
import {IoMdDoneAll} from 'react-icons/io';
import {RxCross1} from 'react-icons/rx';
import Indicator from "../Indicator";
import classNames from "classnames";

const ProjectItem = ({id, title, desc, people, tasksDone, tasksUnDone}) => {

  const classes = classNames(
    'w-full bg-dark-1b rounded-lg py-4 px-12',
    'cursor-pointer hover:scale-[1.01] duration-300'
  );

  return (
    <div className={classes}>
      <p className='text-white-f0 text-2xl'>{title}</p>
      <p className='mt-4 text-gray-7d leading-5 text-sm '>{desc}</p>
      <div className='w-full mt-6 flex justify-end gap-3'>
        {
          people &&
          <Indicator
            icon={<RiGroupFill size={15} color={'#C9C9C9'}/>}
            number={people}
          />
        }
        {
          tasksDone &&
          <Indicator
            icon={<IoMdDoneAll size={15} color={'#47EA75'}/>}
            number={tasksDone}
          />
        }
        {
          tasksUnDone &&
          <Indicator
            icon={<RxCross1 size={15} width={'10px'} color={'#D84343'}/>}
            number={tasksUnDone}
          />
        }
      </div>
    </div>
  );
};

export default ProjectItem;