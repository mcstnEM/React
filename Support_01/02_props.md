### Cours : Les `props` en React

#### 1. Qu'est-ce que les `props` ?

En React, les `props` (abréviation de **properties**) permettent de passer des données d'un composant parent vers un composant enfant. Elles sont un moyen de communication entre les composants et permettent de rendre un composant dynamique en fonction des valeurs reçues. Elles sont en **lecture seule**, c’est-à-dire que l’enfant ne peut pas modifier les valeurs qu'il reçoit via les `props`.

#### 2. Philosophie des `props`

Les `props` respectent une architecture **top-down** : elles sont transmises des composants parents aux composants enfants, sans possibilité de retour. Cela impose une stricte hiérarchie dans le flux de données où un enfant ne peut que recevoir et afficher les `props`, sans avoir le droit de les modifier.

#### 3. Utilisation des `props` dans des composants fonctionnels

Voici comment définir et utiliser des `props` dans un composant fonctionnel :

```jsx
const Hello = (props) => {
  return <h1>Hello, {props.name}</h1>;
};
```

Dans cet exemple, le composant `Hello` reçoit une `prop` appelée `name` et l’affiche dans un élément `<h1>`. Pour utiliser ce composant et lui passer une valeur pour la `prop`, on l'écrit comme une balise HTML en spécifiant un attribut `name` :

```jsx
<Hello name="Alan" />
```

**Note** : Les `props` ne peuvent pas être modifiées à l'intérieur du composant. Toute tentative de modification entraînera une erreur.

#### 4. Exemple d'un composant imbriqué utilisant les `props`
Dans React, il est fréquent d'avoir des composants enfants qui reçoivent des `props` du composant parent. Prenons un exemple où nous avons une liste de messages à afficher. Le composant `Messages` passe chaque message à un sous-composant `Message` pour être affiché individuellement.

```jsx
const MESSAGES = [
  { message: "React JS" },
  { message: "React Native" },
  { message: "Angular" },
  { message: "Symfony" },
  { message: "MongoDB" },
];

const Message = (props) => {
  return <p>{props.message}</p>;
};

const Messages = () => {
  return (
    <div>
      {MESSAGES.map((msg, index) => (
        <Message key={index} message={msg.message} />
      ))}
    </div>
  );
};

// Utilisation du composant Messages dans l'application
const App = () => {
  return (
    <div>
      <h1>Messages List</h1>
      <Messages />
    </div>
  );
};
```

Dans cet exemple :
- Le composant `App` appelle le composant `Messages` qui affiche une liste de messages.
- Chaque message est rendu par le composant `Message` qui reçoit un message via une `prop`.

#### 5. Les `props` et l'immutabilité

Comme mentionné, les `props` sont immuables. Cela signifie que les données reçues dans un composant enfant via les `props` ne peuvent pas être modifiées directement par ce composant. Si vous souhaitez changer une `prop`, vous devez gérer cette modification dans le composant parent, puis renvoyer une nouvelle `prop` à l'enfant.

#### 6. Conclusion

Les `props` sont essentielles dans React pour transmettre des données entre composants et créer des interfaces dynamiques. Leur immutabilité garantit un flux de données unidirectionnel, simplifiant ainsi la gestion des états et améliorant la prévisibilité des composants.