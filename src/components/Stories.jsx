import React, {useState} from 'react';
import {Button, IconButton} from "@mui/material";
import UndoIcon from "@mui/icons-material/Undo";
import QueueIcon from '@mui/icons-material/Queue';
import StoryList from "./StoryList";

const Stories = ({stories, setStoriesOpened, setSelectedStory}) => {

  const [isCreateOpened, setCreateOpened] = useState(false);

  return (
    <div className='w-full h-full bg-dark-24 rounded-[30px]'>
      <div className='h-[10%] w-full bg-dark-31 rounded-t-[30px] flex items-center justify-between py-4 px-12'>
        <div className='flex gap-3 items-center'>
          <IconButton
            onClick={() => setStoriesOpened(false)}
            aria-label="undo"
            style={{color: '#ececec'}}>
            <UndoIcon/>
          </IconButton>
          <p className='text-white-b text-2xl font-medium'>Stories</p>
        </div>
        <Button
          variant="outlined"
          onClick={() => setCreateOpened(!isCreateOpened)}
          startIcon={isCreateOpened ? <UndoIcon/> : <QueueIcon/>}
          style={{
            borderWidth: 3,
            borderColor: '#0f735f',
            color: '#19b096',
          }}>
          {isCreateOpened ? 'Back' : 'New Story'}
        </Button>
      </div>

      {isCreateOpened ?
        null :
        <StoryList
          className={'h-[82%] mt-6 overflow-y-auto px-12 flex flex-col gap-3'}
          stories={stories}
          setSelectedStory={setSelectedStory}
          setStoriesOpened={setStoriesOpened}
        />
      }

    </div>
  );
};

export default Stories;