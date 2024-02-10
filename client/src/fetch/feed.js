import axios from 'axios';

const getPosts = () => {
  return axios.get('http://localhost:3001/posts/');
};

const getMyConnectionPosts = () => {
  return axios.get('http://localhost:3001/posts/myconnectionposts', {
    withCredentials: true,
  });
}

const getFavorites = () => {
  return axios.get('http://localhost:3001/posts/myfavposts', {
    withCredentials: true,
  });
}

const postComment = (postId, content) => {
  if (
    localStorage.getItem("lastCommentTime") &&
    Date.now() - localStorage.getItem("lastCommentTime") < 60000
  ) {
    return Promise.resolve({
      data: { message: "Please wait a few seconds before commenting again." },
    });
  }
  localStorage.setItem("lastCommentTime", Date.now());

  // Check comment for spam
  return axios.post("http://localhost:3001/evaluate-comment", { comment: content })
    .then(response => {
      if (response.data.HateRating > 50 || response.data.SpamRating > 50) {
        return Promise.resolve({
          data: { message: "Your comment was flagged as inappropriate/spam and hence not logged." },
        });
      } else {
        return axios.post('http://localhost:3001/posts/comment', {
          postId,
          content,
        },
          {
            withCredentials: true,
          });
      }
    })
    .catch(error => {
      console.error('Error checking comment:', error);
      return Promise.reject(error);
    });
};

const postFavorite = (postId) => {
  return axios.post('http://localhost:3001/posts/myfavposts', {
    postId,
  },
    {
      withCredentials: true,
    });
};

const putLike = (postId) => {
  return axios.put('http://localhost:3001/posts/likes', {
    postId,
  },
    {
      withCredentials: true,
    });
};


export {
  getPosts,
  postComment,
  putLike,
  postFavorite,
  getMyConnectionPosts,
  getFavorites
};
