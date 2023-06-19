import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export const register = async body => {
  try {
    const response = await axios.post(`${API_URL}/auth/register`, body);
    return response.data;
  } catch ({response}) {
    return response.data;
  }
};

export const login = async body => {
  try {
    const response = await axios.patch(`${API_URL}/auth/login`, body);
    return response.data;
  } catch ({response}) {
    return response.data;
  }
};