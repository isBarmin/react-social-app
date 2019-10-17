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
  },
  follow(userId) {
    return instance.post(`/follow/${userId}`).then(response => response.data);
  },
  unfollow(userId) {
    return instance.delete(`/follow/${userId}`).then(response => response.data);
  },
  getUserProfile(userId) {
    return instance.get(`profile/${userId}`).then(response => response.data);
  }
};

export const authAPI = {
  me() {
    return instance.get(`auth/me`).then(response => response.data);
  }
};
