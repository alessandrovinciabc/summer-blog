import axios from 'axios';

const apiBase =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000/blog/post'
    : 'https://summer-blog-api.herokuapp.com/blog/post';

async function getPosts() {
  return await axios.get(apiBase);
}

export { getPosts };
