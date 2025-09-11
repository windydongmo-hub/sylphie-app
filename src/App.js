import React, { useState } from 'react';
import './App.css';

function App() {
  const [entries, setEntries] = useState([]);
  const [value, setValue] = useState("");

  const addEntry = () => {
    if (!value) return;
    setEntries([...entries, { value: parseInt(value), date: new Date() }]);
    setValue("");
  };

  return (
    <div className="App">
      <h1>MVP Sylphie - Production</h1>
      
      <div>
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Quantité produite"
        />
        <button onClick={addEntry}>Ajouter</button>
      </div>

      <h2>Historique :</h2>
      <ul>
        {entries.map((entry, index) => (
          <li key={index}>
            {entry.date.toLocaleTimeString()} - {entry.value} unités
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

