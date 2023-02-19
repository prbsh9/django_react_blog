import axios from "axios";

async function tokenRefresh() {
  const apiUrl = "http://localhost:8000/api/token/refresh/";
  axios.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${localStorage.getItem("access")}`;
  const { data } = await axios.post(apiUrl, {
    refresh: localStorage.getItem("refresh_token"),
  });
  // console.log(data);
  localStorage.clear();
  localStorage.setItem("access_token", data.access);
  localStorage.setItem("refresh_token", data.refresh);

  window.location.href = "/";
  return 1;
}

export default tokenRefresh;
