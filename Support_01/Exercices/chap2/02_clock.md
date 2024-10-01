### Énoncé : Création d'une Horloge Dynamique avec React

#### Objectif :
Dans cet exercice, vous allez créer une horloge en utilisant React. Cet exercice vous permettra de comprendre comment React fonctionne avec le re-rendering, même sans utiliser de state.

#### Consignes :
1. **Création d'un Composant `Clock`** :
   - Créez un composant `Clock` qui affichera l'heure actuelle. Utilisez l'objet `Date` pour récupérer l'heure.
   - Le rendu de l'heure doit être mis à jour toutes les secondes.

2. **Utilisation de `setInterval`** :
   - Utilisez `setInterval` pour rendre le composant `Clock` toutes les secondes. Cela permettra à React de re-render le composant, affichant ainsi l'heure mise à jour.
   - Assurez-vous que l'horloge affiche correctement l'heure au format `HH:MM:SS`.

3. **Création d'un Composant `Layout`** :
   - Créez un composant `Layout` qui servira de structure pour votre application. Ce composant doit inclure un en-tête, le contenu principal et un pied de page.
   - Intégrez le composant `Clock` à l'intérieur du composant `Layout`.

4. **Mise en Page** :
   - Utilisez le CSS fourni pour styliser votre application, notamment en appliquant un fond beige et une couleur de texte pour les éléments.

#### Exemple de rendu :
Votre horloge devrait afficher quelque chose de similaire à ceci et se mettre à jour chaque seconde :

```
Horloge: 14:25:30
```

#### Bonus :
- Personnalisez le style de votre horloge pour qu'elle se démarque (par exemple, changez la couleur du texte de l'heure).

**Note** : N'oubliez pas d'utiliser un CDN pour React et Babel pour compiler le JSX dans votre fichier `index.html`. 

#### Indications :
- Rappelez-vous que le re-render se produit à chaque fois que vous appelez `mainRoot.render()`. C'est une fonctionnalité clé de React qui permet de mettre à jour l'interface utilisateur en réponse à des changements dans les données.