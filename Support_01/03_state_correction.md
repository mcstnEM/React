import { useState } from "react";

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

function App() {
  const [color, setColor] = useState('black');

  const handleColor = () => {
    // Déclencher la modification de l'état de color au clic
    const newColor = color === 'black' ? 'red' : 'black'; // Alterner entre rouge et noir
    setColor(newColor);
  };

  return (
    <div>
      {catsData.map((cat) => (
        <p key={cat.name} style={{ color: cat.color.split(' ')[0], backgroundColor: "#c3c3c3" }}>
          <span style={{ color: color }} >{cat.name.charAt(0)}</span>{cat.name.slice(1)}
        </p>
      ))}
      <button onClick={handleColor}>Change color</button>
    </div>
  );
}

export default App
