import axios from 'axios';

const getTechStacks = () => {
    return axios.get('http://localhost:3001/techstacks/')
}

export {
    getTechStacks
}

