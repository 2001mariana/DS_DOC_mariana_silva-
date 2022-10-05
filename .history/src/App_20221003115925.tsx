import { ABbutton, ABInput, ABTag, Card } from 'designsystem-marianasilva';
import { useState } from 'react';

import './App.css';

function App() {
  const [inpuState, setInputState] = useState<string>('')

  return (
    <div className="App">
      
        <ABbutton color='Primary' text='button primary small' size='small' />
        <br />
        <ABbutton color='Secondary' text='button secundário small' size='small' />
        <br />
        <ABbutton color='Secondary' text='button secundário large' size='large' />
        <br />
        <ABbutton color='Primary' text='button primary large' size='large' />
        <br />
        
      <Card > 
        <ABTag texto="Tag" />
      </Card>

      <ABInput label='Label example' type='text' value={inpuState} onChange={(value) => setInputState(value)} />
    </div>
  );
}

export default App;
