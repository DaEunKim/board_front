import axios from "axios";
import { HANUL_API, PROXY_URL } from "../CONSTANTS/url";

export function getList() {
  return axios.get(`${PROXY_URL}${HANUL_API}/api/posts/list`);
}

export function deletePost(id) {
  return axios
    .delete(`${PROXY_URL}${HANUL_API}/api/posts/delete/${id}`)
    .then(res => {
      window.location.reload();
    });
}

export function getLike(id) {
  return axios.get(`${PROXY_URL}${HANUL_API}/api/posts/like/${id}`);
}

export function postWriting(data, setCheckRes) {
  const createPostUrl = `${PROXY_URL}${HANUL_API}/api/posts/create`;
  return axios.post(createPostUrl, data).then(res => {
    if (res) {
      setCheckRes(res);
    }
  });
}
