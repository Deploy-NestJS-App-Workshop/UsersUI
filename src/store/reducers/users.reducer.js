import { ADD_USER, DELETE_USER, SET_USERS, UPDATE_USER } from '../actions/users.actions';


const initialState = {
  items: [],
};

export default function usersReducer(state = initialState, { type, payload }) {
  switch (type) {
    case SET_USERS:
      return {
        ...state, items: payload
      }
    case ADD_USER:
      return {
        ...state, items: [...state.items, payload]
      }
    case DELETE_USER:
      return {
        ...state, items: state.items.filter((user) => user.id !== payload)
      }
    case UPDATE_USER:
      return {
        ...state, items: state.items.map((user) => {
          if (user.id === payload.id) {
            return payload;
          }
          return user;
        })
      }
    default:
      return state;
  }
}
