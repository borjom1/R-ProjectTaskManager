import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL + '/user';

export const getUserWith = async (accessToken) => {
  try {
    return await axios.get(API_URL, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });
  } catch ({response}) {
    return response;
  }
};

export const getUserAvatar = async (userId, accessToken) => {
  try {
    return await axios.get(`${API_URL}/avatar/${userId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });
  } catch({response}) {
    return response;
  }
};

export const updateUserInfo = async (body, accessToken) => {
  try {
    await axios.patch(API_URL + '/update', body, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });
  } catch ({response}) {
    return response;
  }
}

export const updateAvatarWith = async (body, accessToken) => {
  try {
    await axios.post(API_URL + '/avatar', body, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });
  } catch ({response}) {
    return response;
  }
};