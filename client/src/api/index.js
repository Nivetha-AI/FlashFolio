

import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((req) => {

  if (localStorage.getItem('profile')) {
    console.log("API")
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }


  return req;
});

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);

export const fetchPosts = () => API.get('/posts');

export const fetchPostsBySearch = (searchQuery) => API.get(`/posts/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags}`);
export const createPost = (newPost) => API.post('/posts', newPost);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);

// export const createOrGetUser = async(response)=>{

//   const decode=jwt_decode(response.credential)
//   console.log(decode)
//   const user={
//     _id:sub,
//     _type:'user',
//     userName:name,
//     image:picture
//   }
//   await axios.post('http://localhost:3000/api/auth', user);
// }

