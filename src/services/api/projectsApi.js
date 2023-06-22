import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL + '/user/projects';

export const getProjects = async accessToken => {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });
    return response.data;
  } catch ({response}) {
    return response;
  }
};

export const createProject = async (body, accessToken) => {
  try {
    const response = await axios.post(API_URL, body, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });
    return response.data;
  } catch ({response}) {
    return response;
  }
};