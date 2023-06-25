import {getStories} from "./api/projectsApi";
import {refresh} from "./api/authApi";
import {getUser, saveUser} from "../utils/localstorage";

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