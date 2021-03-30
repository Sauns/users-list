import { FETCH_USER, FETCH_USERS, SET_USER, SET_USERS } from "../types/types";

const initialState = {
	usersList: [],
  curUser: {},
}

const handlers = {
  [FETCH_USER]: state => ({...state}),
  [SET_USER]: (state, { curUser }) => ({...state, curUser}),
	[FETCH_USERS]: state => ({...state}),
  [SET_USERS]: (state, { users }) => ({...state, usersList: users}),
	DEFAULT: state => state,
}

export const usersReducer = (state = initialState, action) => {
	const handle = handlers[action.type] || handlers.DEFAULT

	return handle(state, action)
}