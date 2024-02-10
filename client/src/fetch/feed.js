import axios from 'axios';

const getPosts = () => {
  return axios.get(process.env.REACT_APP_BACKEND_URL+'posts/');
};

const getMyConnectionPosts = () => {
  return axios.get(process.env.REACT_APP_BACKEND_URL+'posts/myconnectionposts', {
    withCredentials: true,
  });
}

const getFavorites = () => {
  return axios.get(process.env.REACT_APP_BACKEND_URL+'posts/myfavposts', {
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
  return axios.post(process.env.REACT_APP_BACKEND_URL+"evaluate-comment", { comment: content })
    .then(response => {
      if (response.data.HateRating > 50 || response.data.SpamRating > 50) {
        return Promise.resolve({
          data: { message: "Your comment was flagged as inappropriate/spam and hence not logged." },
        });
      } else {
        return axios.post(process.env.REACT_APP_BACKEND_URL+'posts/comment', {
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
  return axios.post(process.env.REACT_APP_BACKEND_URL+'posts/myfavposts', {
    postId,
  },
    {
      withCredentials: true,
    });
};

const putLike = (postId) => {
  return axios.put(process.env.REACT_APP_BACKEND_URL+'posts/likes', {
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
