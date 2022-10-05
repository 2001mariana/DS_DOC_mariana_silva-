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

      <ButtonDanger label='danger - small' size='small' />
      <ButtonDanger label='danger - medium' size='medium' />
      <ButtonDanger label='danger - large' size='large' />

      <div>
      <ButtonSuccess label='success - small' size='small' />
      <ButtonSuccess label='success - medium' size='medium' />
      <ButtonSuccess label='success - large' size='large' />
      </div>
    </div>
  );
}

export default App;
