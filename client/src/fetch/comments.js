import axios from "axios";

const putUpvote = (commentId) => {
    return axios.put(process.env.REACT_APP_BACKEND_URL+`comment/like/${commentId}`,
    {},
    {
      withCredentials: true,
    });
  };

const putDownvote = (commentId) => {
    return axios.put(process.env.REACT_APP_BACKEND_URL+`comment/dislike/${commentId}`,
    {},
    {
      withCredentials: true,
    });
  }

export { putUpvote, putDownvote};