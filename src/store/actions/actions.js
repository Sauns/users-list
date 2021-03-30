import { SET_USER, SET_USERS } from "../types/types";
import * as users from '../../api/Users'

export const setUsers = response => {
  return {
    type: SET_USERS,
    users: response,
  }
}

export const fetchUsers = data => dispatch => {
  return users.fetchUsers(data).then(response => dispatch(setUsers(response)))
}

export const setCurUser = response => {
  return {
    type: SET_USER,
    curUser: response,
  }
}

export const fetchUser = data => dispatch => {
  return users.fetchUser(data).then(response => dispatch(setCurUser(response)))
}