import UserListItem from './UserListItem';
import LanguageContext from '../Providers/LanguageContext';
import { useContext } from 'react';

function UserList({ users, onDelete, onChangeStatus }) {
  const value = useContext(LanguageContext);

  return (
    <>
      <ul>
        {
          users.map((item) => {
            return <UserListItem
              key={item.id}
              user={item}
              onDelete={onDelete}
              onChangeStatus={onChangeStatus}
            ></UserListItem>
          })
        }
      </ul>
    </>
  )
}

export default UserList;
