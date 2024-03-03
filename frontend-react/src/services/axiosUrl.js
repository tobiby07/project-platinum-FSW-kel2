import axios from 'axios';

const axiosObject = axios.create({
    baseURL: process.env.REACT_APP_API_HOST
  })

  export default axiosObject