import { ABbutton, ABInput, AbInputQuant, ABOptionGroup, ABTag, ButtonDanger, ButtonGreen, Card } from 'designsystem-marianasilva';
import { useState } from 'react';

import './App.css';

function App() {
  const [inpuState, setInputState] = useState<string>('')

  return (
    <div className="App">
      
        <br />
        <ABbutton color='Primary' text='button primary small' size='small' />
        <br /><br /><br />
        <ABbutton color='Secondary' text='button secundário small' size='small' />
        <br /><br /><br />
        <ABbutton color='Secondary' text='button secundário large' size='large' />
        <br /><br /><br />
        <ABbutton color='Primary' text='button primary large' size='large' />
        <br />
        
      <Card > 
        <ABTag texto="Tag" />
      </Card>

      <br />
      <ABInput label='Label example' type='text' value={inpuState} onChange={(e) => setInputState(e)} />
      
      <br />
      <ABOptionGroup
        options={[
          {
            body: 'custom body',
            footer: 'custom description/footer',
            id: 1,
            title: 'custom title'
          },
          {
            body: 'custom body',
            footer: 'custom description/footer',
            id: 2,
            title: ' Imcustom title'
          },
          {
            body: 'custom body',
            footer: 'custom description/footer',
            id: 3,
            title: 'E-book + Imcustom title'
          }
        ]}
        valueDefault={{
          body: 'custom body',
          footer: 'custom description/footer',
          id: 1,
          title: 'custom title'
        }}/>
        <br /><br />
      <AbInputQuant onChange={() => {}} />
        <br /><br /><br />

    </div>
  );
}

export default App;
