import axios from 'axios';

const getDiscussions = () => {
  return axios.get(`${process.env.REACT_APP_BACKEND_URL}discussion/`);
};

const getDiscussion = (id) => {
  return axios.get(`${process.env.REACT_APP_BACKEND_URL}discussion/${id}`);
};

const postComment = (discussionId, content) => {
  if (
    localStorage.getItem("lastCommentTime") &&
    Date.now() - localStorage.getItem("lastCommentTime") < 60000
  ) {
    return Promise.resolve({
      data: { message: "Please wait a few seconds before commenting again." },
    });
  }
  localStorage.setItem("lastCommentTime", Date.now());

  return axios.post(`${process.env.REACT_APP_BACKEND_URL}discussion/comment`, {
          discussionId,
          content,
        },
          {
            withCredentials: true,
          });
};


const putUpvote = (discussionId) => {
  return axios.put(`${process.env.REACT_APP_BACKEND_URL}discussion/upvote`, {
    discussionId,
  },
    {
      withCredentials: true,
    });
};

const putDownvote = (discussionId) => {
  return axios.put(`${process.env.REACT_APP_BACKEND_URL}discussion/downvote`, {
    discussionId,
  },
    {
      withCredentials: true,
    });
}

const postDiscussion = (body) => {
  console.log(body);
  return axios.post(`${process.env.REACT_APP_BACKEND_URL}discussion/`, body, {
    withCredentials: true,
  });
}


export {
  getDiscussions,
  postComment,
  putUpvote,
  postDiscussion,
  getDiscussion,
  putDownvote,
};
