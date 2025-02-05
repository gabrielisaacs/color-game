import { useState } from 'react';
import NavBar from './components/NavBar'
import StatusBar from './components/StatusBar';
import GameInstructions from './components/GameInstructions';
import ColorBars from './components/ColorBars';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='w-screen flex flex-col'>
      <NavBar />
      <StatusBar />
      <GameInstructions />
      <ColorBars />
    </div>
  )
}

export default App;
