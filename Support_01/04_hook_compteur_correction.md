# Compteur

```jsx
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const handleDecrement = () => {
    setCount(count - 1)
  }

  const handleIncrement = () => {
    setCount(count + 1)
  }

  return (
    <>
      <p style={{ fontSize: "4em" }}>{count}</p>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleIncrement}>Increment</button>
    </>
  )
};


export default App
```
