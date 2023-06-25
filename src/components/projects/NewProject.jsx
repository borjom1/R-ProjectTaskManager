import React, {useState} from 'react';
import TextInput from "../TextInput";
import classNames from "classnames";
import CreateIcon from '@mui/icons-material/Create';
import {Button} from "@mui/material";
import {createProject} from "../../services/api/projectsApi";
import {refresh} from "../../services/api/authApi";
import {getUser, saveUser} from "../../utils/localstorage";

const NewProject = ({setCreateOpened, projects, setProjects}) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const onCreateProject = () => {
    const body = {name, description};
    const user = getUser();
    if (!user) return;

    createProject(body, user.access).then(res => {
      if (res.status && res.status === 401) {
        refresh(user.refresh).then(data => {
          saveUser(data);
          createProject(body, data.access).then(project => {
            setProjects([...projects, project]);
            setCreateOpened(false);
          });
        });
      } else {
        setProjects([...projects, res]);
        setCreateOpened(false);
      }
    });
  };

  const textAreaClasses = classNames(
    'block p-2.5 rounded-lg resize-none',
    'dark:bg-dark-1f overflow-hidden',
    'dark:border-dark-26 dark:placeholder-gray-400 dark:text-white-f0 outline-none',
  );

  const pClasses = 'text-gray-ce text-sm mb-2';

  return (
    <div className='w-[50%] mt-20 flex flex-col mx-auto'>
      <p className={pClasses}>Choose a name for the project that best describes it</p>
      <TextInput
        onChange={event => setName(event.target.value)}
        label='Project name' bgColor={'#1f1f1f'}
      />
      <p className={pClasses + ' mt-12'}>Write a short description of the project that reveals its essence</p>
      <textarea
        rows={6}
        className={textAreaClasses}
        placeholder="..."
        onChange={event => setDescription(event.target.value)}
      />
      <Button
        className='w-[35%] mx-auto mt-8'
        onClick={onCreateProject}
        variant="filled"
        startIcon={<CreateIcon/>}
        style={{
          backgroundColor: '#0f735f',
          color: '#ececec',
        }}>
        Create
      </Button>
    </div>
  );
};

export default NewProject;