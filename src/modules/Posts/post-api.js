import api from '../../core/api';

const POST_URI = 'posts';

export async function getPosts() {
  const res = await api.get(POST_URI);
  return res.data
}

export async function getPost(id) {
  const res = await api.get(`${POST_URI}/${id}`);
  return res.data;
}