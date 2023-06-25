import React, {useState, useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import PageTemplate from "../components/PageTemplate";
import ProjectList from "../components/projects/ProjectList";
import UserProfile from "../components/user/UserProfile";
import NewProject from '../components/projects/NewProject';
import CreateNewFolderRoundedIcon from '@mui/icons-material/CreateNewFolderRounded';
import UndoIcon from '@mui/icons-material/Undo';
import {Button} from "@mui/material";
import {getUser, removeUser, saveUser} from "../utils/localstorage";
import {getProjects} from "../services/api/projectsApi";
import {refresh} from '../services/api/authApi';

export default function Index() {

  const navigate = useNavigate();
  const [userRoles, setUserRoles] = useState([]);
  const [projects, setProjects] = useState([]);
  const [isCreateOpened, setCreateOpened] = useState(false);

  useEffect(() => {
    console.log('INDEX useEffect()');

    const user = getUser();
    if (!user) {
      navigate('/sign_in');
      return;
    }

    getProjects(user.access).then(res => {
      if (res.status && res.status === 401) {
        refresh(user.refresh).then(data => {

          if (data.status && data.status === 400) {
            removeUser();
            navigate('/sign_in');
            return;
          }

          saveUser(data);
          getProjects(data.access).then(data => setProjects(data));
        });
      } else {
        setProjects(res);
      }
    });

  }, []);

  return (
    <PageTemplate
      upperRight={!projects.length ? null : <UserProfile setUserRoles={setUserRoles}/>}>
      <div className='w-full h-full bg-dark-24 rounded-[30px]'>
        <div className='h-[10%] w-full bg-dark-31 rounded-t-[30px] flex items-center justify-between py-4 px-12'>
          <p className='text-white-d6 text-2xl font-medium'>Projects you are involved in...</p>
          {userRoles.includes('MANAGER') ?
            <Button
              variant="outlined"
              onClick={() => setCreateOpened(!isCreateOpened)}
              startIcon={isCreateOpened ? <UndoIcon/> : <CreateNewFolderRoundedIcon/>}
              style={{
                borderWidth: 3,
                borderColor: '#0f735f',
                color: '#19b096',
              }}>
              {isCreateOpened ? 'Back' : 'New project'}
            </Button>
            : null
          }
        </div>
        {isCreateOpened ?
          <NewProject
            setCreateOpened={setCreateOpened}
            projects={projects}
            setProjects={setProjects}
          /> :
          <ProjectList
            className='flex flex-col gap-4 h-[90%] px-12 py-6 overflow-y-auto'
            projects={projects}
          />
        }
      </div>
    </PageTemplate>
  );
};