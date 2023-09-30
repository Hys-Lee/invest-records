import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Records from './Records';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>test</h1>
      <Records />
    </>
  );
}

export default App;
