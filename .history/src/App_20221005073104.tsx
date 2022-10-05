import { ABbutton, ABInput, AbInputQuant, ABOptionGroup, ABTag, ButtonBlack, ButtonBlue, ButtonDanger, ButtonGreen, ButtonLed, ButtonPink, ButtonYellow, Card } from 'designsystem-marianasilva';
import { useState } from 'react';

import './App.css';
import ComponentVariable from './Components/ComponentVariable';

function App() {
  const [inpuState, setInputState] = useState<string>('')

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
