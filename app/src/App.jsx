import { useState } from 'react';
import NavBar from './components/NavBar'
import StatusBar from './components/StatusBar';
import GameInstructions from './components/GameInstructions';
import ColorBars from './components/ColorBars';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='w-screen min-h-screen flex flex-col'>
      <NavBar />
      <StatusBar />
      <GameInstructions />
      <ColorBars />
      <Footer />
    </div>
  )
}

export default App;
