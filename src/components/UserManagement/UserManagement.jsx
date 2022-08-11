import { useEffect } from 'react';
import UserForm from './UserForm';
import UserList from './UserList';
import { useDispatch, useSelector } from 'react-redux';
import {
  addUserRequestAction,
  changeUsersStatusRequestAction,
  deleteUserRequestAction,
  fetchUsersAction
} from '../../store/actions/users.actions';



function UserManagement() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsersAction());
  }, []);

  async function deleteItem(id) {
    dispatch(deleteUserRequestAction(id));
  }

  async function addUser(user) {
    dispatch(addUserRequestAction(user));
  }

  async function changeStatus(id) {
    dispatch(changeUsersStatusRequestAction(id))
  }

  return (
    <>
      <UserList className="" users={users.items} onDelete={deleteItem} onChangeStatus={changeStatus}></UserList>

      <UserForm onAddUser={addUser}></UserForm>
    </>
  );
}

export default UserManagement;