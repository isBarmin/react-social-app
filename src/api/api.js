import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "6b05612d-2aac-49f5-8647-a684ada38594"
  }
});

export const usersAPI = {
  getUsers(page = 1, pageSIze = 10) {
    return instance
      .get(`users?page=${page}&count=${pageSIze}`)
      .then(response => response.data);
  }
};
