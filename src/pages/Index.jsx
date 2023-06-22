import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import PageTemplate from "../components/PageTemplate";
import ProjectList from "../components/ProjectList";
import UserProfile from "../components/UserProfile";
import CreateNewFolderRoundedIcon from '@mui/icons-material/CreateNewFolderRounded';
import {Button} from "@mui/material";
import {getUser} from "../utils/localstorage";

export default function Index() {

  const navigate = useNavigate();

  useEffect(() => {
    const item = getUser();
    if (!item) {
      navigate('/sign_in');
    }
  }, []);

  const projects = [
    {
      id: 1,
      title: 'Mobile Banking App',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      people: 12,
      tasksDone: 30,
      tasksUnDone: 3
    },
    {
      id: 2,
      title: 'Mobile Banking App',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      people: 8,
      tasksDone: 12,
      tasksUnDone: 17
    },
  ];

  return (
    <PageTemplate
      upperRight={<UserProfile/>}>
      <div className='w-full h-full bg-dark-24 rounded-[30px]'>
        <div className='h-[10%] w-full bg-dark-31 rounded-t-[30px] flex items-center justify-between py-4 px-12'>
          <p className='text-white-d6 text-2xl font-medium'>Projects you are involved in...</p>
          <Button
            variant="outlined"
            startIcon={<CreateNewFolderRoundedIcon/>}
            style={{
              borderWidth: 3,
              borderColor: '#0f735f',
              color: '#19b096',
            }}>
            New project
          </Button>
        </div>
        <ProjectList
          className='flex flex-col gap-4 h-[90%] px-12 py-6 overflow-y-auto'
          projects={projects}
        />
      </div>
    </PageTemplate>
  );
};