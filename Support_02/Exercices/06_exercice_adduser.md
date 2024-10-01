#### Objectif

1. Créez une application React avec Redux Toolkit pour gérer une liste d'utilisateurs.
2. Récupérez la liste d'utilisateurs de l'API `https://jsonplaceholder.typicode.com/users` lorsque l'application se charge.
3. Permettez à l'utilisateur de saisir un `userId` pour ajouter un nouvel utilisateur spécifique à la liste.
4. Gérer les différents états de la requête (en attente, réussie, échouée).

### Étapes à suivre

#### 1. Configuration de Redux et du Slice

Créez une nouvelle application React avec Redux Toolkit (si ce n'est pas déjà fait) :

```bash
npm create vite@latest redux-users-app
cd redux-users-app
npm install @reduxjs/toolkit react-redux
```

#### 2. Créez un Slice pour les utilisateurs

Dans un fichier appelé `usersSlice.js` :

```javascript
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Thunk pour récupérer tous les utilisateurs
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  // ...
});

// Thunk pour ajouter un utilisateur par ID
export const addUserById = createAsyncThunk('users/addUserById', async (userId) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  return response.json();
});

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading';
      })
      // ...
  },
});

export default usersSlice.reducer;
```

#### 3. Configurez le Store Redux

Dans `store.js` :

```javascript
import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './usersSlice';

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});
```

#### 4. Connectez Redux à l'Application React

Dans `index.js`, entourez votre application avec le `Provider` de `react-redux` :

#### 5. Créez le Composant Utilisateurs

Dans `App.js`, créez l'interface utilisateur pour afficher la liste des utilisateurs et ajouter un utilisateur par son `userId` :

```javascript
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, addUserById } from './usersSlice';

const App = () => {
  const dispatch = useDispatch();
  const { users, status, error } = useSelector((state) => state.users);
  const [userId, setUserId] = useState('');

  useEffect(() => {
    // Récupère la liste des utilisateurs au chargement
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleAddUser = () => {
    if (userId) {
      // Exécuter la requête
      // ...
      // reinitialiser l'id utilisateur
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
```

#### 6. Lancez l'application

```bash
npm run dev
```

### Fonctionnalités

1. **Affichage de la liste des utilisateurs** : Lorsque l'application se charge, elle récupère et affiche une liste d'utilisateurs depuis l'API `jsonplaceholder`.
2. **Ajouter un utilisateur par ID** : L'utilisateur peut saisir un `userId` et ajouter cet utilisateur à la liste.

### Remarques :

- Vous pouvez améliorer l'expérience utilisateur en ajoutant une gestion d'erreur plus détaillée, ou en désactivant le bouton si l'ID utilisateur est invalide.
- Si l'utilisateur que vous essayez d'ajouter existe déjà dans la liste, vous pouvez ajouter une logique pour éviter les doublons.
