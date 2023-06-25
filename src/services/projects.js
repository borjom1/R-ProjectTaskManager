import {getStories} from "./api/projectsApi";
import {refresh} from "./api/authApi";
import {getUser, saveUser} from "../utils/localstorage";
import {getUserAvatar} from "./api/userApi";

export const pullAllStories = async (projectId) => {
  const user = getUser();
  const response = await getStories(projectId, user.access);

  if (response.status) { // error is present
    if (response.status === 401) { // unauthorized

      const newAuthData = await refresh(user.refresh);
      saveUser(newAuthData);
      return getStories(projectId, newAuthData.access);

    } else if (response.status === 403) { // not project I am taking part in
      throw 'forbidden';
    }
  } else {
    return response;
  }
};

export const pullAvatars = async members => {
  const storage = [];
  for (const member of members) {
    const res = await getUserAvatar(member.id, getUser().access);
    storage.push({
      id: member.id,
      avatar: res.data.binary
    });
  }
  return storage;
};