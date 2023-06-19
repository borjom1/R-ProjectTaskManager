import {login, register} from "./api/authApi";

export const tryAuth = async (rawUser, isLogin = false) => {

  const data = await (isLogin ? login(rawUser) : register(rawUser));

  const {error, status} = data;
  if (error) {
    throw error;
  } else if (status && status !== 200) {
    throw 'internal error'
  }
  return data;
};