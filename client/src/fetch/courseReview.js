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

  return axios.post(`${process.env.REACT_APP_BACKEND_URL}coursereview/comment`, { courseId, content },
          {
            withCredentials: true,
          });
};

const toggleEnroll = (courseId) => {
  return axios.put(`${process.env.REACT_APP_BACKEND_URL}coursereview/enroll`, { courseId },
    {
      withCredentials: true,
    });
}

export { getCourseReview, getAllCourseReviews, postComment, toggleEnroll };