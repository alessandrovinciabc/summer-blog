import axios from 'axios';

const apiBase =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000/blog/post'
    : 'https://summer-blog-api.herokuapp.com/blog/post';

async function getPosts() {
  return await axios.get(apiBase);
}

async function getComments(postid) {
  return await axios.get(`${apiBase}/${postid}/comment`);
}

export { getPosts, getComments };
