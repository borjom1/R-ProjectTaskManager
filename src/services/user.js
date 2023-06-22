import {getUserAvatar, getUserWith, updateAvatarWith, updateUserInfo} from "./api/userApi";
import {refresh} from './api/authApi';
import {saveUser, getUser} from "../utils/localstorage";

export const getUserInfo = async () => {
  const user = getUser();
  if (!user) {
    return;
  }
  let userInfo = await getUserWith(user.access);

  if (userInfo.status && userInfo.status === 401) {
    const newAuthData = await refresh(user.refresh);
    saveUser(newAuthData);
    userInfo = await getUserWith(newAuthData.access);
  }

  const {data} = await getUserAvatar(user.id, user.access);
  return {...userInfo.data, avatar: data.binary};
};

export const updateUser = async data => {
  const user = isAuthorized();
  if (!user) {
    return;
  }
  const response = await updateUserInfo(data, user.access);
  if (response?.status && response.status === 401) {
    const newAuthData = await refresh(user.refresh);
    saveUser(newAuthData);
    await updateUserInfo(data, newAuthData.access);
  }
}

export const updateAvatar = async image => {
  const user = isAuthorized();
  if (!user) {
    return;
  }
  const response = await updateAvatarWith({binary: image}, user.access);
  if (response?.status && response.status === 401) {
    const newAuthData = await refresh(user.refresh);
    saveUser(newAuthData);
    await updateAvatarWith({binary: image}, user.access);
  }
};

function isAuthorized() {
  const user = getUser();
  return user ? user : false;
}