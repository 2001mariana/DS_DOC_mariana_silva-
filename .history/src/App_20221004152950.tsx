import { ABbutton, ABInput, AbInputQuant, ABOptionGroup, ABTag, ButtonDanger, ButtonSuccess, Card } from 'designsystem-marianasilva';
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
              body: 'R$ 00,00',
              footer: '.pff, ...',
              id: 1,
              title: 'E-book'
            },
            {
              body: 'R$ 00,00',
              footer: '.pff, ...',
              id: 2,
              title: ' Impresso'
            },
            {
              body: 'R$ 00,00',
              footer: '.pff, ...',
              id: 3,
              title: 'E-book + Impresso'
            }
          ]}
          valueDefault={{
            body: 'R$ 00,00',
            footer: '.pff, ...',
            id: 1,
            title: 'E-book'
          }}
        />
        <br /><br /><br />
      <AbInputQuant onChange={() => {}} />
        <br /><br /><br />

      <div>
        <ButtonDanger label='custom text' size='small' />
        <ButtonDanger label=''custom text' size='medium' />
        <ButtonDanger label='custom text' size='large' />
      </div>
      

      <div>
        <ButtonSuccess label=''custom text' size='small' />
        <ButtonSuccess label='s'custom text' size='medium' />
        <ButtonSuccess label=''custom text' size='large' />
      </div>
    </div>
  );
}

export default App;
