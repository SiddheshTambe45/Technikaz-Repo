import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://technikaz-strapi-backend-ae717b9babac.herokuapp.com/api',
})

export default axiosInstance
