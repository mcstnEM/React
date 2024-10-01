## Énoncé de l'Exercice : Affichage Dynamique des Noms de Chats

### Objectif

L'objectif de cet exercice est de créer une application React simple qui affiche les noms de plusieurs chats. Pour chaque chat, la première lettre de son nom doit être affichée dans une couleur qui peut être modifiée dynamiquement par l'utilisateur. Cet exercice vise à vous familiariser avec la gestion du state dans un composant fonctionnel en React.

### Instructions

1. **Création du Composant `Cat`** :
   - Créez un composant `Cat` qui prend en entrée `color`, `colorCat`, et `name`.
   - Ce composant doit afficher le nom du chat, en mettant la première lettre dans une couleur donnée par `colorCat` et le reste du nom dans une couleur déterminée par `color`.

2. **Création du Composant `App`** :
   - Créez un composant `App` qui utilise le hook `useState` pour gérer l'état de la couleur de la première lettre des noms de chats.
   - À l'intérieur de ce composant, déclarez un tableau `catsData` contenant les informations de plusieurs chats (nom, âge, couleur).
   - Ajoutez un bouton qui, lorsqu'il est cliqué, change aléatoirement la couleur de la première lettre des noms des chats. Pour cela, utilisez un tableau de couleurs préalablement défini et mélangez-le à chaque clic.

3. **Affichage des Informations** :
   - Le composant `App` doit également afficher l'âge maximum et minimum des chats, en utilisant les méthodes `Math.max` et `Math.min` sur les âges des chats dans le tableau `catsData`.

4. **Structure de l'Application** :
   - Utilisez un composant `Layout` pour structurer votre application avec un en-tête et un pied de page.
   - L'application doit être rendue dans le DOM à l'aide de `ReactDOM.createRoot`.

### Exemple de Code de Base

Vous pouvez vous baser sur le code ci-dessous pour démarrer votre projet. Complétez-le en suivant les instructions ci-dessus.

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8" />
    <title>Affichage des Chats</title>
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/babel-standalone@latest/babel.min.js"></script>
    <style>
        .main {
            margin: 20px;
        }
        .letter::first-letter {
            font-size: 1.2em;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <div id="root"></div>
    <script type="text/babel">
        const catsData = [
            { name: 'Whiskers', age: 3, color: 'Gray and White' },
            { name: 'Luna', age: 2, color: 'Black' },
            { name: 'Simba', age: 4, color: 'Orange' },
            // Ajoutez d'autres chats ici
        ];

        const colors = ['gray', 'black', 'orange', 'brown'];

        const Cat = ({ color, colorCat, name }) => (
            <p className="letter" style={{ color: colorCat }}>
                <span style={{ color: color ? color : "black" }}>{name[0]}</span>{name.slice(1)}
            </p>
        );

        function App(props) {
            const [color, setColor] = React.useState(null);

            const handleColor = () => {
                // Logique pour changer la couleur ici
            };

            return (
                <Layout>
                    <p>Age max : {props.ageMax} Age min: {props.ageMin}</p>
                    <button onClick={handleColor}>Change color first name cat</button>
                    {props.cats.map((cat, i) => (
                        <Cat key={i} name={cat.name} colorCat={cat.color} color={color} />
                    ))}
                </Layout>
            );
        }

        function Layout({ children }) {
            return (
                <div className="main">
                    <nav>
                        <ul>
                            <li>Home</li>
                        </ul>
                    </nav>
                    {children}
                    <footer>
                        <p>Copy right</p>
                    </footer>
                </div>
            );
        }

        // Rendu dans le DOM
        ReactDOM.createRoot(document.getElementById('root')).render(<App
            cats={catsData}
            ageMax={Math.max(...catsData.map(c => c.age))}
            ageMin={Math.min(...catsData.map(c => c.age))}
        />);
    </script>
</body>
</html>
```

### Remarques

- Assurez-vous de bien tester votre application pour vous assurer que les couleurs changent correctement lorsque vous cliquez sur le bouton.
- Pensez à utiliser `Math.random()` pour mélanger les couleurs de manière aléatoire.
- N'hésitez pas à ajouter des styles CSS pour améliorer l'apparence de votre application.

