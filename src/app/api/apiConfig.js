import axios from 'axios'

const BASE_URL = process.env.REACT_APP_BASE_API_URL

const queryInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true
})

export const queryGet = (url, config = {}) => {
  return queryInstance.get(url, config)
}
