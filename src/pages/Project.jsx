import React, {useEffect, useState} from 'react';
import {useParams, useNavigate} from 'react-router-dom'
import PageTemplate from "../components/PageTemplate";
import Panel from "../components/Panel";
import Tasks from "../components/Tasks";
import Stories from "../components/Stories";
import {getMembers, getProject} from "../services/api/projectsApi";
import {getUser, saveUser} from "../utils/localstorage";
import {pullAllStories, pullAvatars} from "../services/projects";
import Members from "../components/Members";
import {refresh} from "../services/api/authApi";

const Project = () => {
  const navigate = useNavigate();
  const {id} = useParams();

  const [isStoriesOpened, setStoriesOpened] = useState(false);
  const [selectedStory, setSelectedStory] = useState(null);
  const [project, setProject] = useState(null);
  const [stories, setStories] = useState([]);
  const [members, setMembers] = useState([]);
  const [avatars, setAvatars] = useState([]);

  useEffect(() => {
    console.log('PROJECT useEffect()')

    if (isNaN(+id) || !getUser()) {
      navigate('/');
    }

    if (!selectedStory) {
      // try to pull story
      pullAllStories(id)
        .then(res => {
          if (res.status) {
            if (res.status === 401) {
              refresh(getUser().refresh).then(data => {
                saveUser(data);

                pullAllStories(id).then(stories => {
                  onResult(stories);
                });

              });
            } else if (res.status === 403) {
              navigate('/')
            }
          } else {
            onResult(res);
          }
        });
    }

  }, []);

  const onResult = stories => {
    // pull stories
    setStories(stories);
    setSelectedStory(stories[0]);

    // pull project
    getProject(id, getUser().access).then(data => setProject(data));

    // pull members
    getMembers(id, getUser().access).then(data => {
      setMembers(data);

      // load avatar for each member
      pullAvatars(data).then(res => setAvatars(res));
    });
  };

  return (
    <PageTemplate
      urHeight={'h-[22%]'}
      lrHeight={'h-[78%]'}
      upperRight={<Panel name={project?.name}/>}
      lowerRight={
        <Members
          members={members}
          avatars={avatars}
          setMembers={setMembers}
        />
      }
    >
      {isStoriesOpened ?
        <Stories
          projectId={id}
          stories={stories}
          setStories={setStories}
          setStoriesOpened={setStoriesOpened}
          setSelectedStory={setSelectedStory}
        />
        :
        <Tasks
          projectId={id}
          setStoriesOpened={setStoriesOpened}
          selectedStory={selectedStory}
          userAvatars={avatars}
        />
      }
    </PageTemplate>
  );
};

export default Project;