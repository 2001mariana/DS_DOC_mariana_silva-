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

      
        <br /><br />
      <p>success - solid - small</p>
      <ButtonSuccess label='custom text' size='small' variant='solid' />
      <br /><br />
      <p>success - solid - medium</p>
      <ButtonSuccess label='custom text' size='medium' variant='solid' />
      <br /><br />
      <p>success - solid - large</p>
      <ButtonSuccess label='custom text' size='large' variant='solid' />
      <br /><br />
      
      <br /><br />
      <p>success - outlined - small</p>
      <ButtonSuccess label='custom text' size='small' variant='outlined' />
      <br /><br />
      <p>success - outlined - medium</p>
      <ButtonSuccess label='custom text' size='medium' variant='outlined' />
      <br /><br />
      <p>success - outlined - large</p>
      <ButtonSuccess label='custom text' size='large' variant='outlined' />
      <br /><br />

      
      <br /><br />
      <p>danger - solid - small</p>
      <ButtonDanger label='custom text' size='small' variant='solid' />
      <br /><br />
      <p>danger - solid - medium</p>
      <ButtonDanger label='custom text' size='medium' variant='solid' />
      <br /><br />
      <p>danger - solid - large</p>
      <ButtonDanger label='custom text' size='large' variant='solid' />
      <br /><br />

      
      <br /><br />
      <p>danger - outlined - small</p>
      <ButtonDanger label='custom text' size='small' variant='outlined' />
      <br /><br />
      <p>danger - outlined - medium</p>
      <ButtonDanger label='custom text' size='medium' variant='outlined' />
      <br /><br />
      <p>danger - outlined - large</p>
      <ButtonDanger label='custom text' size='large' variant='outlined' />
      <br /><br />
    </div>
  );
}

export default App;
