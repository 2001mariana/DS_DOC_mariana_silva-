import { ABbutton, ABInput, AbInputQuant, ABOptionGroup, ABTag, ButtonDanger, ButtonSuccess, Card } from 'designsystem-marianasilva';
import { useState } from 'react';

import './App.css';

function App() {
  const [inpuState, setInputState] = useState<string>('')

  return (
    <div className="App">
      
        <br />
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
  <br />
      <AbInputQuant onChange={() => {}} />
  <br />

      
  
      <p>success - solid - small</p>
      <ButtonSuccess label='custom text' size='small' variant='solid' />

      <p>success - solid - medium</p>
      <ButtonSuccess label='custom text' size='medium' variant='solid' />

      <p>success - solid - large</p>
      <ButtonSuccess label='custom text' size='large' variant='solid' />

      

      <p>success - outlined - small</p>
      <ButtonSuccess label='custom text' size='small' variant='outlined' />

      <p>success - outlined - medium</p>
      <ButtonSuccess label='custom text' size='medium' variant='outlined' />

      <p>success - outlined - large</p>
      <ButtonSuccess label='custom text' size='large' variant='outlined' />


      

      <p>danger - solid - small</p>
      <ButtonDanger label='custom text' size='small' variant='solid' />

      <p>danger - solid - medium</p>
      <ButtonDanger label='custom text' size='medium' variant='solid' />

      <p>danger - solid - large</p>
      <ButtonDanger label='custom text' size='large' variant='solid' />


      

      <p>danger - outlined - small</p>
      <ButtonDanger label='custom text' size='small' variant='outlined' />

      <p>danger - outlined - medium</p>
      <ButtonDanger label='custom text' size='medium' variant='outlined' />

      <p>danger - outlined - large</p>
      <ButtonDanger label='custom text' size='large' variant='outlined' />

    </div>
  );
}

export default App;
