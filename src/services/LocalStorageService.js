const ACCESS_TOKEN = "ACCESS_TOKEN";

const setToken = (token) => {
  localStorage.setItem(ACCESS_TOKEN, token);
};

const getToken = () => {
  return localStorage.getItem(ACCESS_TOKEN);
};

const removeToken = () => {
  localStorage.removeItem(ACCESS_TOKEN);
};

const getRole = () => {
  if (getToken()) {
    return "user";
  }
  return "guest";
};

export default {
  setToken,
  getToken,
  removeToken,
  getRole,
};
