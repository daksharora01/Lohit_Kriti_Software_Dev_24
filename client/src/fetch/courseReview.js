import axios from "axios";

const getCourseReview = (courseReviewId) => {
  return axios.get(`http://localhost:3001/coursereview/${courseReviewId}`,
    {
      withCredentials: true,
    });
}

const getAllCourseReviews = () => {
  return axios.get(`http://localhost:3001/coursereview/`,
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
  return axios.post("http://localhost:3001/evaluate-comment", { comment: content })
    .then(response => {
      if (response.data.HateRating > 50 || response.data.SpamRating > 50) {
        return Promise.resolve({
          data: { message: "Your comment was flagged as inappropriate/spam and hence not logged." },
        });
      } else {
        return axios.post(`http://localhost:3001/coursereview/comment`, { courseId, content },
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
  return axios.put(`http://localhost:3001/coursereview/enroll`, { courseId },
    {
      withCredentials: true,
    });
}

export { getCourseReview, getAllCourseReviews, postComment, toggleEnroll };