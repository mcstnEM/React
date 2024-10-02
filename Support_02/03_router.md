# Introduction à React Router DOM

React Router est une bibliothèque de routage pour les applications React qui permet de gérer la navigation entre les différentes vues de l'application. Avec React Router, vous pouvez créer des applications à page unique (SPA) où la navigation ne recharge pas la page entière.

### Installation

Pour installer React Router DOM, utilisez npm ou yarn :

```bash
npm install react-router-dom@6.4
```

### Concepts de base

1. **Routes** : Les routes sont des définitions d'URL qui pointent vers des composants React. Chaque route correspond à un chemin d'URL spécifique et à un composant qui sera rendu lorsque l'utilisateur visitera ce chemin.

2. **Router** : Le composant `<BrowserRouter>` est utilisé pour envelopper votre application et activer le routage. C'est ici que la gestion de l'historique du navigateur est gérée.

3. **Link** : Le composant `<Link>` est utilisé pour créer des liens vers d'autres routes dans votre application sans recharger la page.

4. **Outlet** : Le composant `<Outlet>` est utilisé pour rendre les sous-routes. C'est particulièrement utile dans les applications avec des routes imbriquées.

### Configuration des routes

Voici un exemple de configuration de routes avec React Router DOM 6.4.

#### Exemple de structure de dossier

```plaintext
src/
  ├── components/
  │   ├── Home.js
  │   ├── About.js
  │   ├── NotFound.js
  │   └── Layout.js
  └── App.js
```

#### Composants de base

##### Home.js

```jsx
import React from 'react';

const Home = () => {
  return <h1>Bienvenue sur la page d'accueil!</h1>;
};

export default Home;
```

##### About.js

```jsx
import React from 'react';

const About = () => {
  return <h1>À propos de nous!</h1>;
};

export default About;
```

##### NotFound.js

```jsx
import React from 'react';

const NotFound = () => {
  return <h1>404 - Page non trouvée</h1>;
};

export default NotFound;
```

##### Layout.js

```jsx
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/about">À propos</Link>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
};

export default Layout;
```

#### Configuration des routes dans App.js

```jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NotFound from './components/NotFound';
import Layout from './components/Layout';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
```

### Explication du code

1. **BrowserRouter** : Le composant `<Router>` enveloppe votre application et permet la gestion de l'historique.

2. **Routes et Route** : Le composant `<Routes>` contient toutes les définitions de routes. Chaque `<Route>` définit un chemin et le composant à rendre lorsque l'utilisateur accède à ce chemin.

3. **Layout** : Le composant `<Layout>` rend une barre de navigation et utilise `<Outlet>` pour afficher le composant correspondant à la route actuelle.

4. **NotFound** : La route avec `path="*"` est utilisée pour gérer les URL non définies et afficher une page 404.

### Navigation avec Link

Le composant `<Link>` permet de naviguer entre les routes sans recharger la page. En utilisant le composant `<Link>` dans le `<Layout>`, l'utilisateur peut naviguer entre la page d'accueil et la page "À propos".

### Routes imbriquées

React Router DOM 6.4 permet de créer des routes imbriquées. Cela signifie que vous pouvez avoir des sous-routes qui se rendent dans des composants enfants. Par exemple, si vous souhaitez ajouter des sous-routes à la page "À propos", vous pouvez le faire comme suit :

#### Exemple de routes imbriquées

Ajoutez un composant `Team.js` dans le dossier `components` :

##### Team.js

```jsx
import React from 'react';

const Team = () => {
  return <h2>Voici notre équipe!</h2>;
};

export default Team;
```

##### Modifiez le Layout pour inclure les sous-routes

```jsx
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/about">À propos</Link>
        <Link to="/about/team">Équipe</Link>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
};

export default Layout;
```

##### Mise à jour des routes dans App.js

```jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Team from './components/Team';
import NotFound from './components/NotFound';
import Layout from './components/Layout';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}>
            <Route path="team" element={<Team />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
```

### Conclusion

React Router DOM 6.4 est un outil puissant pour gérer le routage dans les applications React. Avec ses fonctionnalités simples et flexibles, il vous permet de créer des applications SPA efficaces avec une navigation fluide. Vous pouvez également gérer les routes imbriquées pour structurer votre application de manière organisée.
