# Introduction à Redux Toolkit

Redux Toolkit (RTK) est une boîte à outils officielle pour la gestion de l'état dans les applications React (et d'autres bibliothèques JavaScript). Il vise à simplifier le processus de configuration et de gestion de l'état avec Redux en fournissant des outils intégrés.

### Installation

Pour commencer à utiliser Redux Toolkit, installez-le avec npm ou yarn :

```bash
npm install @reduxjs/toolkit react-redux
```

ou

```bash
yarn add @reduxjs/toolkit react-redux
```

### Concepts de base

1. **Store** : Un store est un conteneur qui stocke l'état de votre application. C'est un objet JavaScript qui contient l'état principal et fournit des méthodes pour le lire, le mettre à jour et s'abonner aux changements.

2. **Reducer** : Un reducer est une fonction qui prend l'état précédent et une action, puis retourne un nouvel état. C'est ici que la logique de mise à jour de l'état est définie.

3. **Action** : Une action est un objet JavaScript qui décrit un événement qui s'est produit. Chaque action a un type et peut également contenir des données (payload).

### Créer un Store avec Redux Toolkit

Voici comment configurer un store avec Redux Toolkit.

#### Exemple de structure de dossier

```plaintext
src/
  ├── features/
  │   └── counterSlice.js
  ├── App.js
  └── index.js
```

#### Créer un Slice

Les slices sont la manière de définir l'état, les reducers et les actions pour une partie spécifique de votre store. Créez un fichier `counterSlice.js` dans le dossier `features` :

```javascript
// src/features/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Exporter les actions générées par le slice
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// Exporter le reducer pour l'intégrer dans le store
export default counterSlice.reducer;
```

#### Créer le Store

Créez un fichier `store.js` pour configurer le store :

```javascript
// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counterSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
```

### Utiliser Redux dans l'application

Dans le fichier `index.js`, enveloppez votre application avec le `<Provider>` pour passer le store à tous les composants :

```javascript
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```

### Créer des composants avec Redux

Maintenant que le store est configuré, créons un composant pour utiliser l'état du compteur.

#### Composant Counter

Créez un fichier `Counter.js` dans le dossier `src` :

```javascript
// src/Counter.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from './features/counterSlice';

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Compteur : {count}</h1>
      <button onClick={() => dispatch(increment())}>Incrémenter</button>
      <button onClick={() => dispatch(decrement())}>Décrémenter</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>Incrémenter par 5</button>
    </div>
  );
};

export default Counter;
```

#### Intégrer le composant dans App.js

Ajoutez le composant `Counter` dans le fichier `App.js` :

```javascript
// src/App.js
import React from 'react';
import Counter from './Counter';

const App = () => {
  return (
    <div>
      <h1>Application avec Redux Toolkit</h1>
      <Counter />
    </div>
  );
};

export default App;
```

### Explication du code

1. **createSlice** : La fonction `createSlice` simplifie la création de reducers et d'actions. Elle génère automatiquement des actions basées sur les noms des reducers.

2. **useSelector** : Ce hook permet d'extraire des données du store. Il prend une fonction de sélection qui reçoit l'état complet et retourne la partie nécessaire.

3. **useDispatch** : Ce hook retourne la méthode `dispatch`, qui est utilisée pour envoyer des actions au store.

### Gestion des effets secondaires avec `createAsyncThunk`

Redux Toolkit offre également une méthode pour gérer les effets secondaires appelée `createAsyncThunk`. Cela permet de créer des actions asynchrones.

Voici un exemple simple :

#### Exemple d'une action asynchrone

Modifiez votre `counterSlice.js` pour inclure une action asynchrone qui simule une requête :

```javascript
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Simuler une requête API
export const fetchCount = createAsyncThunk('counter/fetchCount', async (amount) => {
  const response = await new Promise((resolve) => {
    setTimeout(() => resolve(amount), 1000);
  });
  return response;
});

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0, status: 'idle' },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCount.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCount.fulfilled, (state, action) => {
        state.value += action.payload;
        state.status = 'idle';
      });
  },
});

// Exporter les actions générées par le slice
export const { increment, decrement } = counterSlice.actions;

// Exporter le reducer pour l'intégrer dans le store
export default counterSlice.reducer;
```

### Conclusion

Redux Toolkit simplifie considérablement la gestion de l'état dans les applications Redux. Avec ses outils intégrés comme `createSlice`, `configureStore`, et `createAsyncThunk`, il vous permet de créer rapidement des applications avec une architecture claire et maintenable.
