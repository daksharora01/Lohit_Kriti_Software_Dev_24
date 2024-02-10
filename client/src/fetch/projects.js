import axios from "axios";

const getProjects = () => {
  return axios.get(`${process.env.REACT_APP_BACKEND_URL}projects/`);
};

const getProject = (id) => {
  return axios.get(`${process.env.REACT_APP_BACKEND_URL}projects/${id}`);
};

const getMyProjects = () => {
  return axios.get(`${process.env.REACT_APP_BACKEND_URL}projects/my`, {
    withCredentials: true,
  });
};

const addCollab = (id, user) => {
  return axios.put(
    `${process.env.REACT_APP_BACKEND_URL}projects/${id}/addCollab`,
    {
      user,
    },
    {
      withCredentials: true,
    }
  );
};

const putLike = (id) => {
  return axios.put(
    `${process.env.REACT_APP_BACKEND_URL}projects/likes/`,
    {
      projectId: id,
    },
    {
      withCredentials: true,
    }
  );
};

const putDislike = (id) => {
  return axios.put(
    `${process.env.REACT_APP_BACKEND_URL}projects/dislikes/`,
    {
      projectId: id,
    },
    {
      withCredentials: true,
    }
  );
};

// const postComment = (id, content) => {
//   if (
//     localStorage.getItem("lastCommentTime") &&
//     Date.now() - localStorage.getItem("lastCommentTime") < 60000
//   ) {
//     return new Promise((resolve, reject) => {
//       resolve({
//         data: { message: "Please wait a few seconds before commenting again." },
//       });
//     });
//   }
//   localStorage.setItem("lastCommentTime", Date.now());
//   return axios.post(
//     ${process.env.REACT_APP_BACKEND_URL}projects/comment/",
//     {
//       projectId: id,
//       content: content,
//     },
//     {
//       withCredentials: true,
//     }
//   );
// };

const postComment = (id, content) => {
  if (
    localStorage.getItem("lastCommentTime") &&
    Date.now() - localStorage.getItem("lastCommentTime") < 60000
  ) {
    return Promise.resolve({
      data: { message: "Please wait a few seconds before commenting again." },
    });
  }
  localStorage.setItem("lastCommentTime", Date.now());
  
  
  return axios.post(
    `${process.env.REACT_APP_BACKEND_URL}projects/comment/`,
    { projectId: id, content: content },
      { withCredentials: true }
  );
};

const deleteProject = (id) => {
  return axios.delete(`${process.env.REACT_APP_BACKEND_URL}projects/${id}`, {
    withCredentials: true,
  });
}


export {
  getProjects,
  getProject,
  putLike,
  putDislike,
  getMyProjects,
  postComment,
  addCollab,
  deleteProject,
};
