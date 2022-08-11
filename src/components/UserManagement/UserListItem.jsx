import { useContext } from 'react';
import LanguageContext from '../Providers/LanguageContext';
import { useNavigate } from "react-router-dom";

function UserListItem({ user, onDelete, onChangeStatus }) {
  const value = useContext(LanguageContext);
  let navigate = useNavigate();

  function navigateToDetail() {
    navigate(`../users/${user.id}`, { replace: true });
  }

  return (
    <li onClick={() => navigateToDetail()}>
      name: {user.name} age: {user.age} is { user.active ? 'active' : 'inactive' }
      {/*<button onClick={() => onChangeStatus(user.id)}>change status</button>*/}
      {/*<button onClick={() => onDelete(user.id)}>delete</button>*/}
      {/*<button onClick={() => value.toggleLanguage()}>change language</button>*/}
    </li>
  )
}

export default UserListItem;
