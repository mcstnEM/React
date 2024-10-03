### Objectif
Créer une application React avec Redux Toolkit et React Router, qui interagit avec l'API PokeAPI pour afficher une liste de Pokémon selon leur type dans des onglets de catégories.

### Prérequis
- Connaissance de React (composants, hooks)
- Connaissance de Redux Toolkit (store, slice, createAsyncThunk)
- Connaissance de React Router (routes, navigation)

### Étapes

#### 1. Initialisation du projet

1. **Créer un projet React avec Vite**  
   Ouvrez un terminal et exécutez :
   ```bash
   npm create vite@latest react-pokemon-app --template react
   cd react-pokemon-app
   npm install
   ```

2. **Installer les dépendances**  
   Nous allons utiliser Redux Toolkit et React Router :
   ```bash
   npm install @reduxjs/toolkit react-redux react-router-dom
   ```

#### 2. Structuration de l'application

L'application aura une architecture propre avec une séparation claire des fichiers.

```plaintext
src/
│
├── app/
│   └── store.js               # Fichier de configuration du store Redux
├── features/
│   └── pokemon/
│       ├── pokemonSlice.js     # Slice pour gérer les pokémons
│       └── pokemonAPI.js       # Appels API pour récupérer les pokémons
├── components/
│   ├── Navbar.js               # Barre de navigation avec les catégories
│   └── PokemonList.js          # Composant pour afficher la liste des pokémons
├── pages/
│   ├── HomePage.js             # Page principale avec les onglets
│   └── PokemonCategoryPage.js  # Page pour chaque catégorie de Pokémon
├── App.js                      # Point d'entrée principal
└── index.js                    # Fichier principal pour démarrer React
```

#### 3. Mise en place du Store Redux

Dans `src/app/store.js`, configurez le store

#### 4. Création du Slice Pokémon

Dans `src/features/pokemon/pokemonSlice.js`, créez un slice avec une thunk pour récupérer les pokémons selon leur type.  
> Vous pouvez utiliser axios

#### 5. Composants et Pages

1. **Navbar**  
   Dans `src/components/Navbar.js`, créez une barre de navigation avec les onglets de catégories :

   ```javascript
   import { Link } from 'react-router-dom';

   const Navbar = () => {
     return (
       <nav>
         <ul>
           <li><Link to="/category/fire">Feu</Link></li>
           <li><Link to="/category/water">Eau</Link></li>
           <li><Link to="/category/earth">Terre</Link></li>
           <li><Link to="/category/air">Air</Link></li>
           <li><Link to="/category/plant">Plante</Link></li>
         </ul>
       </nav>
     );
   };

   export default Navbar;
   ```
> Vous pouvez remplacer Link par NavLink

2. **Page d'affichage des Pokémon par catégorie**  
   Dans `src/pages/PokemonCategoryPage.js`, affichez la liste des Pokémon d'une catégorie donnée en utilisant `useEffect` pour déclencher l'appel à l'API via la thunk `fetchPokemonByType` :

   ```javascript
   import React, { useEffect } from 'react';
   import { useDispatch, useSelector } from 'react-redux';
   import { fetchPokemonByType } from '../features/pokemon/pokemonSlice';
   import PokemonList from '../components/PokemonList';
   import { useParams } from 'react-router-dom';

   const PokemonCategoryPage = () => {
     // Renseignez-vous dans la doc de react-router
     const { category } = useParams();
     const dispatch = useDispatch();
     const pokemonByType = useSelector((state) => state.pokemon.pokemonByType[category]);
     const status = useSelector((state) => state.pokemon.status);
     
     useEffect(() => {
        // Récupérer les pokémon par type
     }, [category, dispatch]);

     return (
       <div>
         <h2>Catégorie : {category}</h2>
         {status === 'loading' && <p>Chargement des Pokémon...</p>}
         {status === 'succeeded' && <PokemonList pokemon={pokemonByType} />}
         {/* Ajouter le comportement en cas d'erreur */}
       </div>
     );
   };

   export default PokemonCategoryPage;
   ```

3. **Composant PokemonList**  
   Dans `src/components/PokemonList.js`, listez les pokémons récupérés :

   ```javascript
   const PokemonList = ({ pokemon }) => {
     return (
       <ul>
        {/* Afficher la liste de pokémon */}
       </ul>
     );
   };

   export default PokemonList;
   ```

#### 6. Routes et Navigation

1. **Configurer les routes dans App.js**  
   Dans `src/App.js`, utilisez React Router pour configurer les routes vers les catégories :


2. **Page d'accueil**  
   Créez une simple page d'accueil dans `src/pages/HomePage.js` :

   ```javascript
   const HomePage = () => {
     return <h1>Bienvenue sur l'application Pokémon</h1>;
   };

   export default HomePage;
   ```

#### 7. Conclusion

Lancez l'application avec :

```bash
npm run dev
```

Votre application est désormais opérationnelle et permet de naviguer entre les différentes catégories de Pokémon en utilisant Redux Toolkit, React Router, et l'API PokeAPI.

### Points Bonus
- Ajoutez des loaders pendant que les données sont récupérées.
- Gérez les erreurs de façon plus sophistiquée.
- Ajoutez une pagination pour les Pokémon si vous souhaitez afficher plus de résultats.
