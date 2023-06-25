import React, {useEffect, useState} from 'react';
import {MdOutlineWorkHistory} from 'react-icons/md';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import {Button, IconButton} from "@mui/material";
import TaskList from "./TaskList";
import UndoIcon from "@mui/icons-material/Undo";
import {useNavigate} from "react-router-dom";
import {getTasks} from "../../services/api/projectsApi";
import {getUser, saveUser} from "../../utils/localstorage";
import {refresh} from "../../services/api/authApi";
import NewTask from "./NewTask";

const Tasks = ({roles, projectId, setStoriesOpened, selectedStory, userAvatars}) => {

  const navigate = useNavigate();
  const [isCreateOpened, setCreateOpened] = useState(false);
  const [tasks, setTasks] = useState([]);

  const isManager = roles?.includes('MANAGER');

  useEffect(() => {
    console.log('TASKS useEffect()');
    const user = getUser();

    if (!selectedStory) {
      return;
    }
    console.log('TASKS pull tasks')
    getTasks(projectId, selectedStory.id, user.access).then(res => {
      if (res.status && res.status === 401) {
        refresh(user.refresh).then(data => {
          saveUser(data);
          getTasks(projectId, selectedStory.id, user.access)
            .then(data => setTasks(data));
        });
      } else {
        setTasks(res);
      }
    });

  }, [selectedStory]);

  const handleUndoClick = () => isCreateOpened ? setCreateOpened(false) : navigate('/');

  return (
    <div className='w-full h-full bg-dark-24 rounded-[30px]'>

      <div className='h-[10%] w-full bg-dark-31 rounded-t-[30px] flex items-center justify-between py-4 px-12'>

        <div className='flex gap-3 items-center'>
          <IconButton
            onClick={handleUndoClick}
            aria-label="undo"
            style={{color: '#ececec'}}>
            <UndoIcon/>
          </IconButton>
          <div className='flex gap-2 items-center bg-dark-24 py-1 px-4 rounded-lg'>
            <MdOutlineWorkHistory color={'#7D7D7D'} size={20}/>
            <p className='text-gray-7d'>{selectedStory ? selectedStory.name : 'Not selected'}</p>
          </div>
          <p className='text-white-b text-2xl font-medium'>Tasks</p>
        </div>
        {!isCreateOpened &&
          <div className='flex gap-2'>
            {selectedStory?.id && isManager &&
              <Button
                onClick={() => setCreateOpened(true)}
                variant="outlined"
                startIcon={<AddCircleOutlineIcon/>}
                style={{
                  borderWidth: 3,
                  borderColor: '#0f735f',
                  color: '#19b096',
                }}>
                New task
              </Button>
            }
            <Button
              onClick={() => setStoriesOpened(true)}
              variant="filled"
              startIcon={<AutoAwesomeMotionIcon/>}
              style={{backgroundColor: '#5d5d5d', color: '#ececec'}}>
              Stories
            </Button>
          </div>
        }

      </div>

      {isCreateOpened ?
        <NewTask
          storyId={selectedStory.id}
          setCreateOpened={setCreateOpened}
          setTasks={setTasks}
          tasks={tasks}
        /> :
        <TaskList
          className='h-[83%] px-12 mt-4 flex flex-col gap-4 overflow-y-auto'
          selectedStory={selectedStory}
          tasks={tasks}
          setTasks={setTasks}
          userAvatars={userAvatars}
        />
      }

    </div>
  );
};

export default Tasks;