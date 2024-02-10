import axios from "axios";

const getCourseReview = (courseReviewId) => {
  return axios.get(`${process.env.REACT_APP_BACKEND_URL}coursereview/${courseReviewId}`,
    {
      withCredentials: true,
    });
}

const getAllCourseReviews = () => {
  return axios.get(`${process.env.REACT_APP_BACKEND_URL}coursereview/`,
    {
      withCredentials: true,
    });
}

const postComment = (courseId, content) => {
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
  return axios.post(`${process.env.REACT_APP_BACKEND_URL}evaluate-comment`, { comment: content })
    .then(response => {
      if (response.data.HateRating > 50 || response.data.SpamRating > 50) {
        return Promise.resolve({
          data: { message: "Your comment was flagged as inappropriate/spam and hence not logged." },
        });
      } else {
        return axios.post(`${process.env.REACT_APP_BACKEND_URL}coursereview/comment`, { courseId, content },
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

const toggleEnroll = (courseId) => {
  return axios.put(`${process.env.REACT_APP_BACKEND_URL}coursereview/enroll`, { courseId },
    {
      withCredentials: true,
    });
}

export { getCourseReview, getAllCourseReviews, postComment, toggleEnroll };