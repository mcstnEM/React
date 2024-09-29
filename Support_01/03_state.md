# Cours : Comprendre le State dans React

## Introduction

En React, un **state** (état) permet d'ajouter un état local à un composant. Il est mutable et peut être mis à jour grâce à la méthode `setState`. Dans ce cours, nous allons examiner comment utiliser le state, en commençant par une approche avec des classes ES6 avant de passer à l'utilisation des hooks dans des composants fonctionnels.

## Concept du State

Le state est un objet qui contient des informations sur le composant et peut être modifié au cours de son cycle de vie. Pour interagir avec le state :

- **Initialisation** : On définit le state dans le constructeur du composant.
  
  ```javascript
  this.state = {
    a: 1,
    b: 2,
  };
  ```

- **Lecture** : On accède au state avec `this.state`.

  ```javascript
  const valueA = this.state.a;
  ```

- **Mise à jour** : On utilise `setState` pour mettre à jour le state.

  ```javascript
  this.setState({ a: 11 });
  ```

### Important

- **Ne pas modifier le state directement** : La modification directe du state, comme `this.state.a = 2`, ne met pas à jour le rendu du composant.

## Exemple Complet avec une Classe

Voici un exemple simple d'utilisation du state dans un composant de classe :

```jsx
class TestState extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  render() {
    setTimeout(() => {
      this.setState({ count: this.state.count + 1 });
      console.log(this.state.count);
    }, 1000);

    return (
      <div>
        <p>Count: {this.state.count}</p>
      </div>
    );
  }
}

ReactDOM.createRoot(document.getElementById("root")).render(<TestState />);
```

### Explication de l'exemple

1. **Initialisation** : Le state `count` est initialisé à 0 dans le constructeur.
2. **Re-rendering** : Un `setTimeout` est utilisé pour mettre à jour le state toutes les secondes. L'utilisation de `this.setState` déclenche un re-render du composant.

## Approche Fonctionnelle avec les Hooks

Pour définir un state dans un composant fonctionnel, vous utilisez le hook `useState`. Voici comment cela fonctionne :

```jsx
const Clock = () => {
  const [timer, setTimer] = React.useState(new Date());

  const tick = () => {
    setTimeout(() => setTimer(new Date()), 1000);
  };

  tick();

  return <p>{timer.toLocaleTimeString()}</p>;
};
```

### Explication de l'exemple

1. **Initialisation** : Le hook `useState` initialise `timer` avec la date actuelle.
2. **Mise à jour** : La fonction `tick` met à jour `timer` toutes les secondes.

## Exercice : Affichage des Noms de Chats

### Objectif

Affichez le nom de chaque chat avec la première lettre de son nom dans une couleur différente. Ajoutez un bouton pour modifier la couleur des noms.

### Instructions

1. **Données des chats** : Utilisez le tableau suivant pour obtenir les informations des chats.

   ```js
   const catsData = [
     { name: 'Whiskers', age: 3, color: 'Gray and White' },
     { name: 'Luna', age: 2, color: 'Black' },
     { name: 'Simba', age: 4, color: 'Orange' },
     { name: 'Midnight', age: 1, color: 'Black' },
     { name: 'Bella', age: 5, color: 'Tabby' },
     { name: 'Gizmo', age: 2, color: 'Gray' },
     { name: 'Nala', age: 3, color: 'Beige' },
     { name: 'Oliver', age: 4, color: 'White and Brown' },
     { name: 'Cleo', age: 2, color: 'Calico' },
     { name: 'Max', age: 6, color: 'Tabby' }
   ];
   ```

2. **Composant `App`** :

   - Créez un composant `App` qui itère sur le tableau `catsData` pour afficher le nom de chaque chat.
   - Ajoutez un bouton qui change la couleur de la première lettre du nom du chat.

Voici un exemple de code pour vous aider à démarrer :

```html
<script type="text/babel">
  function App() {
    const [color, setColor] = React.useState('black');

    const handleColor = () => {
      // Déclencher la modification de l'état de color au clic
      const newColor = color === 'black' ? 'red' : 'black'; // Alterner entre rouge et noir
      setColor(newColor);
    };

    return (
      <div>
        {catsData.map((cat) => (
          <p key={cat.name} style={{ color: color }}>
            {cat.name.charAt(0)}{cat.name.slice(1)}
          </p>
        ))}
        <button onClick={handleColor}>Change color</button>
      </div>
    );
  }
</script>
```

### Conclusion

Le state en React est un outil essentiel pour gérer les données locales d'un composant. En comprenant comment initialiser, lire et mettre à jour le state, vous pouvez créer des applications réactives et dynamiques. Dans les prochaines leçons, nous aborderons des concepts plus avancés, tels que l'utilisation de hooks et la gestion d'effets secondaires.