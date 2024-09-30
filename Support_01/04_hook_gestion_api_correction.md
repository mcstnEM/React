# gestion de l'api correction

```jsx
import { useEffect, useState } from "react";

const App = () => {
  const [users, setUsers] = useState(null)

  const fetchData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
      .then(data => data.json())

    console.log(response)
    setUsers(response)
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <>
      <h1>Liste utilisateurs</h1>
      {users ? (<ul>
        {users.map(user => <li key={user.id}>{user.username}</li>)}
      </ul>) : <p>Données en chargement</p>}
    </>
  )
};


export default App
```
