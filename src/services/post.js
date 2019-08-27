import axios from "axios";
import { HANUL_API, PROXY_URL } from "../CONSTANTS/url";

export function getList() {
  return axios.get(`${HANUL_API}/api/posts/list`);
}

export function getReadPost(id) {
  return axios.get(`${HANUL_API}/api/posts/read/${id}`);
}

export function deletePost(id) {
  return axios.delete(`${HANUL_API}/api/posts/delete/${id}`).then(res => {
    window.location.reload();
  });
}

export function postLike(data) {
  const likeUrl = `${HANUL_API}/api/posts/like`;
  return axios.post(likeUrl, data).then(res => {
    if (res) {
      window.location.reload();
    }
  });
}

export function postWriting(data, setCheckRes) {
  const createPostUrl = `${HANUL_API}/api/posts/create`;
  return axios.post(createPostUrl, data).then(res => {
    if (res) {
      setCheckRes(res);
    }
  });
}

export function postSignup(data, setCheckRes) {
  const SignUpUrl = `${HANUL_API}/api/users/create`;
  return axios
    .post(SignUpUrl, data)
    .then(res => {
      if (res.data.success) {
        console.log(res);
        setCheckRes(res.data);
      }
    })
    .catch(err => {
      console.log(err);
    });
}
