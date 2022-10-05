import {  ButtonBlack, ButtonBlue, ButtonDanger, ButtonGreen, ButtonLed, ButtonPink, ButtonYellow } from 'designsystem-marianasilva';

import ComponentVariable from '../../../Components/ComponentVariable';

function Home() {

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
    </div>
  );
}

export default Home;
