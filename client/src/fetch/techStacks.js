import axios from 'axios';

const getTechStacks = () => {
    return axios.get(process.env.REACT_APP_BACKEND_URL+'techstacks/')
}

export {
    getTechStacks
}

