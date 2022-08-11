const USER_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:3000';

export async function createUser(user) {
  const res = await fetch(USER_URL, {
    method: 'POST',
    body: JSON.stringify(user),
    headers: { 'Content-Type': 'application/json' }
  });

  return res.json();
}

export async function updateUser(id, user) {
  const res = await fetch(`${USER_URL}/${id}`, {
    method: 'PUT',
    body: JSON.stringify(user),
    headers: { 'Content-Type': 'application/json' }
  });

  return res.json();
}

export async function deleteUser(id) {
  const res = await fetch(`${USER_URL}/${id}`, {
    method: 'DELETE',
  });

  return res.json();
}

export async function getUsers() {
  const res = await fetch(USER_URL);

  return res.json();
}

export async function getUser(id) {
  const res = await fetch(`${USER_URL}/${id}`);

  return res.json();
}
