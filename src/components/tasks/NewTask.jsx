import React, {useState} from 'react';
import TextInput from "../TextInput";
import CreateIcon from "@mui/icons-material/Create";
import {Button} from "@mui/material";
import Mark from "../Mark";
import {HiOutlineBookmark} from "react-icons/hi";
import {createTask} from "../../services/api/projectsApi";
import {getUser, saveUser} from "../../utils/localstorage";
import {refresh} from "../../services/api/authApi";

const NewTask = ({storyId, setCreateOpened, setTasks, tasks}) => {

  const [title, setTitle] = useState('');
  const [marks, setMarks] = useState({});

  const handleCreateClick = () => {
    if (!title || !marks) {
      return;
    }

    const selected = [];
    for (const key in marks) {
      if (marks[key]) {
        selected.push(key.toUpperCase());
      }
    }

    const body = {
      storyId,
      title,
      marks: selected
    };

    createTask(body, getUser().access)
      .then(res => {
        console.log('create task: ', res)
        if (res.status && res.status === 401) {
          console.log('create task: handle 401')
          refresh(getUser().refresh).then(data => {
            saveUser(data);
            createTask(body, getUser().access).then(task => {
              setTasks([...tasks, task]);
              setCreateOpened(false);
            });
          });
        } else {
          setTasks([...tasks, res]);
          setCreateOpened(false);
        }
      });
  };

  return (
    <div className='w-[65%] flex flex-col items-center mx-auto mt-28 border-2 border-dark-31 rounded-lg py-6 px-6'>
      <TextInput
        className='w-full'
        onChange={event => setTitle(event.target.value)}
        label='Task title' bgColor={'#1f1f1f'}
      />

      <div className='w-full flex gap-1 items-center mt-8 mb-1'>
        <HiOutlineBookmark color={'#7A7A7A'}/>
        <p className='text-sm text-gray-7a'>Select marks</p>
      </div>

      <div className="w-full bg-dark-15 rounded-lg flex gap-2 justify-between items-center py-2 px-2">
        <Mark
          onClick={() => setMarks({...marks, backend: !marks.backend})}
          text={'Backend'}
          bgColor={'#4D3511'}
          textColor={'#EE9E28'}
          medium={true}
          state={marks.backend}
        />
        <Mark
          onClick={() => setMarks({...marks, frontend: !marks.frontend})}
          text={'Frontend'}
          bgColor={'#5B123E'}
          textColor={'#EF37A5'}
          medium={true}
          state={marks.frontend}
        />
        <Mark
          onClick={() => setMarks({...marks, data: !marks.data})}
          text={'Data'}
          bgColor={'#0D5626'}
          textColor={'#1FD75E'}
          medium={true}
          state={marks.data}
        />
        <Mark
          onClick={() => setMarks({...marks, design: !marks.design})}
          text={'Design'}
          bgColor={'#2E164C'}
          textColor={'#9044F0'}
          medium={true}
          state={marks.design}
        />
        <Mark
          onClick={() => setMarks({...marks, analytics: !marks.analytics})}
          text={'Analytics'}
          bgColor={'#162C4C'}
          textColor={'#446AF0'}
          medium={true}
          state={marks.analytics}
        />
      </div>

      <Button
        onClick={handleCreateClick}
        className='w-[30%] px-3 mt-10'
        variant="filled"
        startIcon={<CreateIcon/>}
        style={{
          backgroundColor: '#1e7777',
          color: '#ececec',
        }}>
        Create
      </Button>
    </div>
  );
};

export default NewTask;