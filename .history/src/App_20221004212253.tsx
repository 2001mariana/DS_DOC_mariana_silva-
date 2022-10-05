import { ABbutton, ABInput, AbInputQuant, ABOptionGroup, ABTag, ButtonBlack, ButtonBlue, ButtonDanger, ButtonGreen, ButtonLed, ButtonPink, ButtonYellow, Card } from 'designsystem-marianasilva';
import { useState } from 'react';

import './App.css';

function App() {
  const [inpuState, setInputState] = useState<string>('')

  return (
    <div className="App">
      
    <h2>Variações do ButtonDanger</h2>
      <p>{`<ButtonDanger label="custom text" size="small" variant="outlined"/>`}</p>
      <div className='test'>
        <ButtonDanger label='custom text' size='small' />
        <ButtonDanger label='custom text' size='medium' />
        <ButtonDanger label='custom text' size='large' />
      </div>

      <div className='test'>
        <ButtonDanger label='custom text' size='small' variant='solid' />
        <ButtonDanger label='custom text' size='medium' variant='solid' />
        <ButtonDanger label='custom text' size='large' variant='solid' />
      </div>

      <h2>Variações do ButtonYellow</h2>
      <p>{`<ButtonYellow label="custom text" size="small" variant="outlined"/>`}</p>
      <div className='test'>
        <ButtonYellow label='custom text' size='small' />
        <ButtonYellow label='custom text' size='medium' />
        <ButtonYellow label='custom text' size='large' />
      </div>

      <div className='test'>
        <ButtonYellow label='custom text' size='small' variant='solid' />
        <ButtonYellow label='custom text' size='medium' variant='solid' />
        <ButtonYellow label='custom text' size='large' variant='solid' />
      </div>      

      <h2>Variações do ButtonGreen</h2>
      <p>{`<ButtonGreen label="your custom text" size="small | medium | large" variant="outlined | solid"/>`}</p>
      <div className='test'>
        <ButtonGreen label='custom text' size='small' />
        <ButtonGreen label='custom text' size='medium' />
        <ButtonGreen label='custom text' size='large' />
      </div>

      <div className='test'>
        <ButtonGreen label='custom text' size='small' variant='solid' />
        <ButtonGreen label='custom text' size='medium' variant='solid' />
        <ButtonGreen label='custom text' size='large' variant='solid' />
      </div>

      <h2>Variações do ButtonBlue</h2>
      <p>{`<ButtonBlue label="custom text" size="small" variant="outlined"/>`}</p>
      <div className='test'>
        <ButtonBlue label='custom text' size='small' />
        <ButtonBlue label='custom text' size='medium' />
        <ButtonBlue label='custom text' size='large' />
      </div>

      <div className='test'>
        <ButtonBlue label='custom text' size='small' variant='solid' />
        <ButtonBlue label='custom text' size='medium' variant='solid' />
        <ButtonBlue label='custom text' size='large' variant='solid' />
      </div>

      <h2>Variações do ButtonPink</h2>
      <p>{`<ButtonPink label="your custom text" size= "small" | "medium" | "large" variant="outlined" | "solid" intensity= "dark" | "light" />`}</p>
      <div className='test'>
        <ButtonPink label='custom text' size='small' intensity='dark' />
        <ButtonPink label='custom text' size='medium' intensity='dark' />
        <ButtonPink label='custom text' size='large' intensity='dark' />
      </div>

      <div className='test'>
        <ButtonPink label='custom text' size='small' variant='solid' intensity='dark' />
        <ButtonPink label='custom text' size='medium' variant='solid' intensity='dark' />
        <ButtonPink label='custom text' size='large' variant='solid' intensity='dark' />
      </div>

      <div className='test'>
        <ButtonPink label='custom text' size='small' variant='outlined' intensity='light' />
        <ButtonPink label='custom text' size='medium' variant='outlined' intensity='light' />
        <ButtonPink label='custom text' size='large' variant='outlined' intensity='light' />
      </div>

      <div className='test'>
        <ButtonPink label='custom text' size='small' variant='solid' intensity='light' />
        <ButtonPink label='custom text' size='medium' variant='solid' intensity='light' />
        <ButtonPink label='custom text' size='large' variant='solid' intensity='light' />
      </div>


      <h2>Variações do ButtonBlack</h2>
      <p>{`<ButtonBlack label="custom text" size="small" variant="outlined"/>`}</p>
      <div className='test'>
        <ButtonBlack label='custom text' size='small' />
        <ButtonBlack label='custom text' size='medium' />
        <ButtonBlack label='custom text' size='large' />
      </div>

      <div className='test'>
        <ButtonBlack label='custom text' size='small' variant='solid' />
        <ButtonBlack label='custom text' size='medium' variant='solid' />
        <ButtonBlack label='custom text' size='large' variant='solid' />
      </div>

      <h2>Variações do ButtonLed</h2>
      <p>{`<ButtonLed label="custom text" size="small" | "medium" | "large"/>`}</p>
      <div className='test'>
        <ButtonLed label='custom text' size='small' />
        <ButtonLed label='custom text' size='medium' />
        <ButtonLed label='custom text' size='large' />
      </div>
      

      <h2>Componentes criados para desenvolvimento da biblioteca aluurabook, por isso iniciam-se com AB</h2>
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
