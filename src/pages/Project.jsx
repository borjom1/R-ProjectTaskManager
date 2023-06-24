import React, {useEffect, useState} from 'react';
import {useParams, useNavigate} from 'react-router-dom'
import PageTemplate from "../components/PageTemplate";
import Panel from "../components/Panel";
import Tasks from "../components/Tasks";
import Stories from "../components/Stories";
import {getProject} from "../services/api/projectsApi";
import {getUser} from "../utils/localstorage";
import {pullAllStories} from "../services/projects";

const Project = () => {
  const navigate = useNavigate();
  const {id} = useParams();

  const [isStoriesOpened, setStoriesOpened] = useState(false);
  const [selectedStory, setSelectedStory] = useState(null);
  const [project, setProject] = useState(null);
  const [stories, setStories] = useState([]);
  const [members, setMembers] = useState([]);

  useEffect(() => {
    console.log('PROJECT useEffect()')

    if (isNaN(+id) || !getUser()) {
      navigate('/');
    }

    if (!selectedStory) {
      // try to pull story
      pullAllStories(id)
        .then(stories => {
          setStories(stories);
          setSelectedStory(stories[0]);

          getProject(id, getUser().access).then(data => setProject(data));
        })
        .catch(() => navigate('/'));
    }

  }, []);

  return (
    <PageTemplate upperRight={<Panel name={project?.name}/>}>
      {isStoriesOpened ?
        <Stories
          stories={stories}
          setStoriesOpened={setStoriesOpened}
          setSelectedStory={setSelectedStory}
        />
        :
        <Tasks
          projectId={id}
          setStoriesOpened={setStoriesOpened}
          selectedStory={selectedStory}
        />
      }
    </PageTemplate>
  );
};

export default Project;