import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchUserAction, updateUserInfoAction } from '../../store/actions/users.actions';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

function UserDetail() {
  let { id } = useParams();
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    name: '',
    age: 0,
    active: false,
  })

  useEffect( () => {
    async function getUser() {
      const userInfo = await dispatch(fetchUserAction(id));
      setUser(userInfo);
    }
    getUser();
  }, [id]);

  function onSubmit(e) {
    e.preventDefault();

    dispatch(updateUserInfoAction(id, user));
  }

  function onChange(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.name !== 'active' ? e.target.value : e.target.checked,
    })
  }

  return (
    <>
      <h2>User Details</h2>

      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input id="name" name="name" type="text" value={user.name} onChange={onChange}/>
        </div>

        <div>
          <label htmlFor="age">Age: </label>
          <input id="age" name="age" type="number" value={user.age} onChange={onChange}/>
        </div>

        <div>
          <label htmlFor="active">Active: </label>
          <input id="active" name="active" type="checkbox" checked={user.active} onChange={onChange}/>
        </div>

        <button type="submit">Save</button>
      </form>
    </>
  )
}

export default UserDetail;