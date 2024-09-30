Voici un cours détaillé sur les Hooks de React, accompagné d'exercices sans correction :

---

# Cours sur les Hooks de React

## Introduction

Les Hooks de React sont des fonctions qui vous permettent d’utiliser l'état et d'autres fonctionnalités de React sans écrire une classe. Introduits dans React 16.8, ils permettent de rendre le code plus fonctionnel et de mieux structurer la logique des composants.

## 1. Les Hooks de base

### 1.1 useState

`useState` est le Hook le plus simple et le plus utilisé. Il permet de déclarer un état local dans un composant fonctionnel.

**Syntaxe :**

```javascript
const [state, setState] = useState(initialState);
```

- `initialState` : La valeur initiale de l'état.
- `state` : La valeur actuelle de l'état.
- `setState` : Une fonction pour mettre à jour l'état.

**Exemple :**

```javascript
import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
};
```

### 1.2 useEffect

`useEffect` permet d'exécuter des effets de bord dans les composants fonctionnels, comme les requêtes d'API ou les abonnements.

**Syntaxe :**

```javascript
useEffect(() => {
    // Code de l'effet
    return () => {
        // Cleanup (facultatif)
    };
}, [dependencies]);
```

- Le tableau des dépendances permet de contrôler quand l'effet doit être exécuté.

**Exemple :**

```javascript
import React, { useEffect, useState } from 'react';

const DataFetcher = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://api.example.com/data')
            .then(response => response.json())
            .then(data => setData(data));

        return () => {
            // Cleanup (facultatif)
        };
    }, []);

    return <div>{JSON.stringify(data)}</div>;
};
```

### 1.3 useContext

`useContext` permet d'accéder au contexte sans avoir besoin de l'utiliser avec un composant de classe.

**Syntaxe :**

```javascript
const value = useContext(MyContext);
```

**Exemple :**

```javascript
import React, { createContext, useContext } from 'react';

const MyContext = createContext();

const ContextConsumer = () => {
    const value = useContext(MyContext);
    return <div>{value}</div>;
};

// Utilisation du contexte
const App = () => (
    <MyContext.Provider value="Hello, World!">
        <ContextConsumer />
    </MyContext.Provider>
);
```

## 2. Hooks personnalisés

Les Hooks personnalisés vous permettent d'extraire et de réutiliser la logique des composants. 

**Exemple :**

```javascript
import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(url);
            const result = await response.json();
            setData(result);
        };

        fetchData();
    }, [url]);

    return data;
};

// Utilisation du Hook personnalisé
const App = () => {
    const data = useFetch('https://api.example.com/data');

    return <div>{JSON.stringify(data)}</div>;
};
```

## 3. Exercices

### Exercice 1 : Compteur

Créez un composant qui affiche un compteur. Le compteur doit commencer à 0 et avoir deux boutons : un pour incrémenter et un pour décrémenter le compteur.

### Exercice 2 : Gestion de l'API

Créez un composant qui récupère des données d'une API et les affiche. Utilisez `useEffect` pour effectuer la requête. Assurez-vous de gérer les erreurs potentielles.

```jsx
// exemple d'API
const url_api = 'https://jsonplaceholder.typicode.com'
```

### Exercice 3 : Liste de noms

Créez un composant qui affiche une liste de noms. Permettez à l'utilisateur de modifier les noms avec des boutons pour convertir chaque nom en majuscule, en minuscule ou afficher la longueur de chaque nom.
