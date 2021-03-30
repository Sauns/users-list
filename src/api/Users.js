 import axios from 'axios'
import { getQueryStringFromObject } from '../helpers/getQueryStringFromObject'

export const fetchUsers = props => {
  const params = getQueryStringFromObject(props)
  return axios.get(`${process.env.REACT_APP_USERS_URL}users${params ? `?${params}` : ''}`).then(response => response.data)
}

export const fetchUser = name => {
  return axios.get(`${process.env.REACT_APP_USERS_URL}users/${name}`).then(response => response.data)
}