import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL + '/auth';

export const register = async body => {
  try {
    const response = await axios.post(`${API_URL}/register`, body);
    return response.data;
  } catch ({response}) {
    return response.data;
  }
};

export const login = async body => {
  try {
    const response = await axios.patch(`${API_URL}/login`, body);
    return response.data;
  } catch ({response}) {
    return response.data;
  }
};

export const refresh = async refresh => {
  try {
    const response = await axios.patch(`${API_URL}/refresh`, {
      token: refresh
    });
    return response.data;
  } catch ({response}) {
    return response.data;
  }
};