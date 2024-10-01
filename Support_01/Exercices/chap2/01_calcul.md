### Énoncé : Affichage de la Moyenne des Étudiants

#### Objectif :
Dans cet exercice, vous allez créer une petite application React qui affiche la moyenne des notes pour chaque étudiant dans une liste donnée. Chaque étudiant a un nom et un ensemble de notes. Si un étudiant n’a pas de notes, un message "Aucune note" sera affiché.

#### Consignes :
1. Utilisez **React** avec **JSX** pour afficher la liste des étudiants et leurs moyennes.
2. La moyenne des notes sera calculée et affichée à côté du nom de l’étudiant.
3. Si un étudiant n’a pas de notes, affichez "Aucune note".
4. Utilisez un style CSS pour afficher le texte en couleur.

#### Données :
Vous avez les données suivantes pour les étudiants :

```js
const students = [
    { notes: [12, 11, 10], name: "Alan" },
    { notes: [18, 10, 19], name: "Alice" },
    { notes: [10, 9, 11], name: "Bernard" },
    { notes: [11, 17, 19], name: "Sophie" },
    { notes: [], name: "Alex" },
    { name: "Phil" },
];
```

#### Étapes :
1. Créez une fonction `average` qui calcule la moyenne des notes d’un étudiant.
2. Créez un composant `Student` qui prend un étudiant en **props** et affiche son nom et sa moyenne.
3. Créez un composant `App` qui va parcourir la liste des étudiants et afficher chaque étudiant à l'aide du composant `Student`.
4. Rendu : Utilisez `ReactDOM.createRoot` pour afficher votre composant `App` dans une div avec l’id `root`.

#### Exemple de rendu :
```txt
Alan, average: 11
Alice, average: 15.67
Bernard, average: 10
Sophie, average: 15.67
Alex, average: Aucune note
Phil, average: Aucune note
```

#### Bonus :
- Arrondissez la moyenne à deux décimales.
- Appliquez un style pour que le nom soit en noir et la moyenne soit affichée en violet.

**Note** : N'oubliez pas d'utiliser un CDN React et Babel pour compiler le JSX dans votre fichier `index.html`.