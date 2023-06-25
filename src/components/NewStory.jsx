import React, {useState} from 'react';
import TextInput from "./TextInput";
import Datepicker from "react-tailwindcss-datepicker";
import CreateIcon from "@mui/icons-material/Create";
import {Button} from "@mui/material";
import {createStory} from "../services/api/projectsApi";
import {getUser, saveUser} from "../utils/localstorage";
import {refresh} from "../services/api/authApi";
import {AiOutlineTag, AiOutlineCalendar} from 'react-icons/ai';

const NewStory = ({projectId, stories, setStories, setCreateOpened}) => {
  const [name, setName] = useState('');
  const [value, setValue] = useState({
    startDate: null,
    endDate: null
  });

  const handleCreateClick = () => {
    const {startDate, endDate} = value;
    if (!name || !startDate || !endDate) {
      return;
    }

    const body = {
      name,
      from: startDate,
      to: endDate
    };

    createStory(projectId, body, getUser().access)
      .then(res => {
        if (res.status && res.status === 401) {
          refresh(getUser().refresh).then(data => {
            saveUser(data);
            createStory(projectId, body, data.access).then(story => {
              setStories([...stories, story]);
              setCreateOpened(false);
            });
          });
        } else {
          setStories([...stories, res]);
          setCreateOpened(false);
        }
      });
  };

  return (
    <div className='w-2/5 mx-auto mt-28 border-2 border-dark-31 rounded-lg py-6 px-6'>

      <div className='flex gap-1 items-center mb-1.5'>
        <AiOutlineTag color={'#7A7A7A'}/>
        <p className='text-sm text-gray-7a'>Write name of project story</p>
      </div>

      <TextInput
        className='w-full'
        onChange={event => setName(event.target.value)}
        label='Story name' bgColor={'#1f1f1f'}
      />


      <div className='flex gap-1 items-center mt-10 mb-1.5'>
        <AiOutlineCalendar color={'#7A7A7A'}/>
        <p className='text-sm text-gray-7a'>Select story period</p>
      </div>

      <Datepicker
        value={value}
        onChange={newValue => setValue(newValue)}
        showShortcuts={true}
      />
      <Button
        onClick={handleCreateClick}
        className='w-full px-3 mt-10'
        variant="filled"
        startIcon={<CreateIcon/>}
        style={{
          backgroundColor: '#1c1c1c',
          color: '#ececec',
        }}>
        Create
      </Button>
    </div>
  );
};

export default NewStory;