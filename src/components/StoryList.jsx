import React from 'react';
import StoryItem from "./StoryItem";

const StoryList = ({className, stories, setSelectedStory, setStoriesOpened}) => {

  const mappedStories = stories?.map(story =>
    <StoryItem
      onClick={() => {
        setSelectedStory(story);
        setStoriesOpened(false);
      }}
      key={story.id}
      id={story.id}
      name={story.name}
      tasks={story.tasksCount}
      from={story.from}
      to={story.to}
    />
  );

  return (
    <div className={className}>
      {mappedStories}
    </div>
  );
};

export default StoryList;