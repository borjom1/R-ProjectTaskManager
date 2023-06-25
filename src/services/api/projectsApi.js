import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL + '/user/projects';

const authHeader = (token) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
};

export const getProject = async (id, accessToken) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`, authHeader(accessToken));
    return response.data;
  } catch ({response}) {
    return response;
  }
};

export const getProjects = async accessToken => {
  try {
    const response = await axios.get(API_URL, authHeader(accessToken));
    return response.data;
  } catch ({response}) {
    return response;
  }
};

export const createProject = async (body, accessToken) => {
  try {
    const response = await axios.post(API_URL, body, authHeader(accessToken));
    return response.data;
  } catch ({response}) {
    return response;
  }
};

export const getFirstStory = async (projectId, accessToken) => {
  try {
    const response = await axios.get(`${API_URL}/${projectId}/story`, authHeader(accessToken));
    return response.data;
  } catch ({response}) {
    console.log(response)
    return response;
  }
};

export const getStories = async (projectId, accessToken) => {
  try {
    const response = await axios.get(`${API_URL}/${projectId}/stories`, authHeader(accessToken));
    return response.data;
  } catch ({response}) {
    return response;
  }
};

export const getTasks = async (projectId, storyId, accessToken) => {
  try {
    const response = await axios.get(`${API_URL}/tasks?projectId=${projectId}&storyId=${storyId}`, authHeader(accessToken));
    return response.data;
  } catch ({response}) {
    return response;
  }
};

export const createStory = async (projectId, body, accessToken) => {
  try {
    const response = await axios.post(`${API_URL}/${projectId}/story`, body, authHeader(accessToken));
    return response.data;
  } catch ({response}) {
    return response;
  }
};

export const createTask = async (body, accessToken) => {
  try {
    const response = await axios.post(`${API_URL}/tasks`, body, authHeader(accessToken));
    return response.data;
  } catch ({response}) {
    return response;
  }
};