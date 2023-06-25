import React from 'react';
import StoryItem from "./StoryItem";
import {AiFillAlert} from "react-icons/ai";

const StoryList = ({className, stories, setSelectedStory, setStoriesOpened}) => {

  const list = stories?.map(story =>
    <StoryItem
      onClick={() => {
        setSelectedStory(story);
        setStoriesOpened(false);
      }}
      key={story.id}
      id={story.id}
      name={story.name}
      tasks={story.tasksCount}
      from={story.start}
      to={story.end}
    />
  );

  return (
    <div className={className}>
      {list.length ? list :
        <div className='flex flex-col items-center mt-20'>
          <AiFillAlert size={75} color={'#3d3d3d'}/>
          <p className='text-[#3d3d3d] text-2xl font-bold'>There are no stories yet</p>
        </div>
      }
    </div>
  );
};

export default StoryList;