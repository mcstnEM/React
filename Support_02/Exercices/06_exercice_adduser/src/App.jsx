import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, addUserById } from './redux/usersSlice';

const App = () => {
  const dispatch = useDispatch();
  const {users, status, error} = useSelector((state) => state.users)
  const [userId, setUserId] = useState('');

  useEffect(() => {
    // Récupère la liste des utilisateurs au chargement
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleAddUser = () => {
    if (userId) {
      dispatch(addUserById(userId))
      setUserId('');
    }
  };

  return (
    <div className="App">
      <h1>Liste des utilisateurs</h1>

      {status === 'loading' && <p>Chargement...</p>}
      {status === 'failed' && <p>Erreur: {error}</p>}

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>

      <div>
        <input
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          placeholder="ID utilisateur"
        />
        <button onClick={handleAddUser}>Ajouter un utilisateur</button>
      </div>
    </div>
  );
};

export default App;
