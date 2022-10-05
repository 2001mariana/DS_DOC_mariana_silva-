import { ABbutton, ABInput, AbInputQuant, ABOptionGroup, ABTag, ButtonBlack, ButtonBlue, ButtonDanger, ButtonGreen, ButtonLed, ButtonPink, ButtonYellow, Card } from 'designsystem-marianasilva';
import { useState } from 'react';

import './Home.css';
import ComponentVariable from './Components/ComponentVariable';

function Home() {
  const [inpuState, setInputState] = useState<string>('')

  return (
    <div className="Home">

   
     
    <ComponentVariable
      title='Variações do ButtonBlue'
      subtitle='<ButtonBlue label="custom text"  size="small" | "medium" | "large" variant="outlined" | "solid" />'
    >
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
    </ComponentVariable>
      
    <ComponentVariable
      title='Variações do ButtonPink'
      subtitle='<ButtonPink label="your custom text" size= "small" | "medium" | "large" variant="outlined" | "solid" intensity= "dark" | "light" />'
    >
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
    </ComponentVariable>     

    <ComponentVariable
      title='Variações do ButtonBlack'
      subtitle='<ButtonBlack label="custom text" size="small" | "medium" | "large" variant="outlined" | "solid" />'
    >
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
    </ComponentVariable>
      
    <ComponentVariable
      title='Variações do ButtonLed'
      subtitle='<ButtonLed label="custom text" size="small" | "medium" | "large" />'
    >
      <div className='test'>
        <ButtonLed label='custom text' size='small' />
        <ButtonLed label='custom text' size='medium' />
        <ButtonLed label='custom text' size='large' />
      </div>
    </ComponentVariable>

    <ComponentVariable 
      title='Variações do ButtonDanger' 
      subtitle='<ButtonDanger label="custom text"  size="small" | "medium" | "large" variant="outlined" | "solid" />' 
    >
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
    </ComponentVariable>

    <ComponentVariable 
      title='Variações do ButtonYellow' 
      subtitle='<ButtonYellow label="custom text"  size="small" | "medium" | "large" variant="outlined" | "solid" />'
    >
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
    </ComponentVariable>
          

    <ComponentVariable
      title='Variações do ButtonGreen'
      subtitle='<ButtonGreen label="your custom text"  size="small" | "medium" | "large" variant="outlined" | "solid" />'
    >
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
    </ComponentVariable>

      <h2>Componentes criados para desenvolvimento da biblioteca alurabook, por isso iniciam-se com AB</h2>

      <ComponentVariable
      title='Variações do ABbutton'
      subtitle='<ButtonGreen text="your custom text" color="Primary" | "Secondary" size="small" | "large" />'
    >
      <div className='test'>
        <ABbutton color='Secondary' text='custom text' size='small' />
        <ABbutton color='Secondary' text='custom text' size='large' />
      </div>

      <div className='test'>
        <ABbutton color='Primary' text='custom text' size='small' />
        <ABbutton color='Primary' text='custom text' size='large' />
      </div>
    </ComponentVariable>

    <ComponentVariable subtitle='<ABTag texto="your custom text" />'>
      <ABTag texto="Tag" />
    </ComponentVariable>
      <Card > 
        
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

export default Home;
