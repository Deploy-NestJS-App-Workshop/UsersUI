import { createUser, deleteUser, getUser, getUsers, updateUser } from '../../components/UserManagement/userApi';

export const SET_USERS = '[User] set users';
export const ADD_USER = '[User] add user';
export const DELETE_USER = '[User] delete user';
export const UPDATE_USER = '[User] update user';


// Action creator
export function setUsersAction(users) {
  return {
    type: SET_USERS,
    payload: users,
  }
}

export function addUserAction(user) {
  return {
    type: ADD_USER,
    payload: user,
  }
}

export function deleteUserAction(id) {
  return {
    type: DELETE_USER,
    payload: id,
  }
}

export function updateUserAction(user) {
  return {
    type: UPDATE_USER,
    payload: user,
  }
}

// Thunk creator
export function fetchUsersAction() {
  return async function(dispatch) {
    const users = await getUsers();

    dispatch(setUsersAction(users));
  }
}

export function fetchUserAction(id) {
  return async function() {
    return getUser(id);
  }
}

export function updateUserInfoAction(id, user) {
  return async function() {
    return updateUser(id, user);
  }
}

export function deleteUserRequestAction(id) {
  return async function(dispatch) {
    try {
      await deleteUser(id);

      dispatch(deleteUserAction(id));
    } catch (e) {
      console.warn(e);
    }
  }
}

export function addUserRequestAction(user) {
  return async function(dispatch) {
    try {
      const newUser = await createUser(user);

      dispatch(addUserAction(newUser));
    } catch (e) {
      console.warn(e);
    }
  }
}

export function changeUsersStatusRequestAction(id) {
  return async function(dispatch, getState) {
    const { users } = getState();
    const user = users.items.find(item => item.id === id);
    const updatedUser = { ...user, active: !user.active }

    await updateUser(id, updatedUser); // We can skip await

    dispatch(updateUserAction(updatedUser));
  }
}