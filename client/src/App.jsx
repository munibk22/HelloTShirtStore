import { useState } from 'react';
import Canvas from './canvas';
import Home from './pages/Home';
import Customizer from './pages/customizer';


function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="app transition-all ease-in">
      <h1 className="">T-Shirt ThreeJS App</h1>
     <Home />
     <Canvas />
     <Customizer />
    </main>
  )
}

export default App
