import { ButtonBlack, ButtonBlue, ButtonBlueLed, ButtonDanger, ButtonGreen, ButtonGreenLed, ButtonLed, ButtonPink, ButtonPinkLed, ButtonRainbow, ButtonYellow, ButtonYellowLed } from 'designsystem-marianasilva';

import ComponentVariable from '../../Components/ComponentVariable';
import HowToInstall from '../../Components/HowToInstall';

function Buttons() {

  return (
    <div className="Buttons">
      
    <HowToInstall />

    <ComponentVariable
      title='Variações do ButtonRainbow'
      subtitle='<ButtonRainbow label="custom text" size="small" | "medium" | "large" />'
    >
      <div className='test'>
        <ButtonRainbow label='custom text' size='small' />
        <ButtonRainbow label='custom text' size='medium' />
        <ButtonRainbow label='custom text' size='large' />
      </div><br /><br />
    </ComponentVariable>
         
    <ComponentVariable
      title='Variações do ButtonLed'
      subtitle='<ButtonLed label="custom text" size="small" | "medium" | "large" />'
    >
      <div className='test'>
        <ButtonLed label='custom text' size='small' />
        <ButtonLed label='custom text' size='medium' />
        <ButtonLed label='custom text' size='large' />
      </div><br /><br />
    </ComponentVariable>

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
        title='Variações do ButtonBlueLed' 
        subtitle='<ButtonBlueLed label="custom text"  size="small" | "medium" | "large" intensity="light" | "dark" />'
    >

    <div className='test'>
      <ButtonBlueLed label='custom text' size='small' intensity='dark' />
      <ButtonBlueLed label='custom text' size='medium' intensity='dark' />
      <ButtonBlueLed label='custom text' size='large' intensity='dark' />
    </div>

    <div className='test'>
      <ButtonBlueLed label='custom text' size='small' intensity='light' />
      <ButtonBlueLed label='custom text' size='medium' intensity='light' />
      <ButtonBlueLed label='custom text' size='large' intensity='light' />
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
      title='Variações do ButtonPinkLed' 
      subtitle='<ButtonPinkLed label="custom text"  size="small" | "medium" | "large" intensity="light" | "dark" />'
    >

    <div className='test'>
      <ButtonPinkLed label='custom text' size='small' intensity='dark' />
      <ButtonPinkLed label='custom text' size='medium' intensity='dark' />
      <ButtonPinkLed label='custom text' size='large' intensity='dark' />
    </div>

    <div className='test'>
      <ButtonPinkLed label='custom text' size='small' intensity='light' />
      <ButtonPinkLed label='custom text' size='medium' intensity='light' />
      <ButtonPinkLed label='custom text' size='large' intensity='light' />
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
        title='Variações do ButtonYellowLed' 
        subtitle='<ButtonYellowLed label="custom text"  size="small" | "medium" | "large" intensity="light" | "dark" />'
    >

    <div className='test'>
      <ButtonYellowLed label='custom text' size='small' intensity='dark' />
      <ButtonYellowLed label='custom text' size='medium' intensity='dark' />
      <ButtonYellowLed label='custom text' size='large' intensity='dark' />
    </div>

    <div className='test'>
      <ButtonYellowLed label='custom text' size='small' intensity='light' />
      <ButtonYellowLed label='custom text' size='medium' intensity='light' />
      <ButtonYellowLed label='custom text' size='large' intensity='light' />
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

    
    <ComponentVariable 
        title='Variações do ButtonGreenLed' 
        subtitle='<ButtonGreenLed label="custom text"  size="small" | "medium" | "large" intensity="light" | "dark" />'
    >

    <div className='test'>
      <ButtonGreenLed label='custom text' size='small' intensity='dark' />
      <ButtonGreenLed label='custom text' size='medium' intensity='dark' />
      <ButtonGreenLed label='custom text' size='large' intensity='dark' />
    </div>

    <div className='test'>
      <ButtonGreenLed label='custom text' size='small' intensity='light' />
      <ButtonGreenLed label='custom text' size='medium' intensity='light' />
      <ButtonGreenLed label='custom text' size='large' intensity='light' />
    </div>
    </ComponentVariable>
    

    </div>
  );
}

export default Buttons;
