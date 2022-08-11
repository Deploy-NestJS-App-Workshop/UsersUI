import { useState } from 'react';

function UserForm({ onAddUser }) {
  const [user, setUser] = useState({
    name: '',
    age: '',
    active: false,
  });

  function changeUser(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.name === 'active' ? e.target.checked : e.target.value,
    });
  }

  function submitForm(e) {
    e.preventDefault();

    onAddUser(user);

    setUser({
      name: '',
      age: '',
      active: false,
    });
  }

  return (
    <form onSubmit={submitForm}>
      <input name="name" type="text" value={user.name} onChange={changeUser}/>
      <input name="age" type="text" value={user.age} onChange={changeUser}/>
      <input name="active" type="checkbox" checked={user.active} onChange={changeUser}/>

      <button>Save</button>
    </form>
  )
}

export default UserForm;
