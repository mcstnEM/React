# Cours sur les Formulaires en React

## Introduction aux Formulaires

Les formulaires sont essentiels pour interagir avec les utilisateurs dans une application web. En HTML, les éléments de formulaire comme `<input>`, `<textarea>` et `<select>` sont utilisés pour capturer les données des utilisateurs. Dans React, nous devons gérer ces données via l'état local d'un composant.

## Pourquoi utiliser React pour les Formulaires ?

1. **Gestion de l'État** : React permet de gérer facilement l'état des champs de formulaire avec des hooks comme `useState`.
2. **Rendu Réactif** : Les mises à jour de l'état entraînent un re-rendu du composant, ce qui assure que l'interface utilisateur est toujours à jour.
3. **Validation et Gestion des Erreurs** : La gestion des erreurs et des validations devient plus simple avec les états et les événements.

## Structure de Base d'un Formulaire

Voici un exemple simple d'un formulaire dans React :

```javascript
import React, { useState } from 'react';

function Form() {
  const [username, setUsername] = useState("");

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`User added: ${username}`);
    setUsername(""); // Reset the input field
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={handleChange}
          required // HTML5 required attribute
        />
      </label>
      <button type="submit">Add User</button>
    </form>
  );
}

export default Form;
```

### Explications :

- **useState** : Permet de déclarer un état local dans le composant pour stocker la valeur de l'input.
- **handleChange** : Met à jour l'état `username` chaque fois que l'utilisateur saisit quelque chose.
- **handleSubmit** : Empêche le rechargement de la page et affiche le nom d'utilisateur dans la console lors de la soumission.

## Les Différents Types d'Entrées

### 1. Input

Les éléments `<input>` sont utilisés pour capturer les entrées de texte, mots de passe, e-mails, etc.

```javascript
<input type="text" value={username} onChange={handleChange} />
```

### 2. Textarea

Les `<textarea>` sont utilisés pour des entrées de texte multilignes.

```javascript
<textarea value={textareaValue} onChange={(e) => setTextareaValue(e.target.value)} />
```

### 3. Select

Pour les listes déroulantes, utilisez `<select>` :

```javascript
const [selectedOption, setSelectedOption] = useState("");

<select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
  <option value="option1">Option 1</option>
  <option value="option2">Option 2</option>
</select>
```

### 4. Checkbox et Radio

Pour les cases à cocher et les boutons radio, gérez l'état différemment :

```javascript
const [isChecked, setIsChecked] = useState(false);

<input
  type="checkbox"
  checked={isChecked}
  onChange={(e) => setIsChecked(e.target.checked)}
/>
```

### 5. Gestion des inputs multiples

Pour un formulaire avec plusieurs champs, utilisez un objet d'état :

```javascript
const [formData, setFormData] = useState({ username: '', email: '' });

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((prev) => ({ ...prev, [name]: value }));
};

// Utilisation dans le JSX
<input name="username" value={formData.username} onChange={handleChange} />
<input name="email" value={formData.email} onChange={handleChange} />
```

## Validation et Gestion des Erreurs

### 1. Validation Simple

Vous pouvez utiliser la méthode `required` sur les éléments `<input>` pour effectuer une validation simple. Pour des validations plus complexes, gérez l'état des erreurs :

```javascript
const [error, setError] = useState("");

const handleSubmit = (event) => {
  event.preventDefault();
  if (!username) {
    setError("Username is required");
    return;
  }
  // Process the submission
  setError(""); // Clear error
};
```

### 2. Affichage des Erreurs

Affichez les erreurs sous le formulaire :

```javascript
{error && <p style={{ color: 'red' }}>{error}</p>}
```

## Exemples d'Exercices

### Exercice 1 : Formulaire d'Ajout d'Utilisateurs

**Énoncé** : Créez un formulaire pour ajouter des utilisateurs. Vérifiez que l'utilisateur n'existe pas déjà et que le champ n'est pas vide. Affichez la liste des utilisateurs ajoutés.

### Exercice 2 : Calcul des Multiples

**Énoncé** : Créez un formulaire qui permet de choisir un nombre entier et d'afficher tous ses multiples jusqu'à 100 dans une liste.


### TP conversion de nombres

Vous pouvez faire le TP avec ou sans Vite.

[sujet conversion](./TP/01_conversion.md)