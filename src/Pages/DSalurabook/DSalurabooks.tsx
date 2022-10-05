import { ABbutton, ABInput, AbInputQuant, ABOptionGroup, ABTag } from 'designsystem-marianasilva';
import { useState } from 'react';
import ComponentVariable from '../../Components/ComponentVariable/ComponentVariable';
import { Card } from 'designsystem-marianasilva';

import './DSalurabook.css'

function DSalurabook() {
  const [inpuState, setInputState] = useState<string>('')

  return (
    <div className="DSalurabook">
      <p>Componentes criados para desenvolvimento do sistema alurabook durante um curso da Alura. Por isso todos iniciam-se com AB.</p>

    <ComponentVariable
      title='Variações do ABbutton'
      subtitle='<ButtonGreen text="your custom text" color="Primary" | "Secondary" size="small" | "large" />'
    >
      <div className='test'>   
        <ABbutton color='Primary' text='Primary' size='small' />
        <ABbutton color='Primary' text='Primary' size='large' />
        
        <ABbutton color='Secondary' text='Secondary' size='small' />
        <ABbutton color='Secondary' text='Secondary' size='large' />
      </div>
    </ComponentVariable>

    <ComponentVariable title='ABTag' subtitle='<ABTag texto="your custom text" />'>
      <ABTag texto="Tag" />
    </ComponentVariable>

    <ComponentVariable title='ABCard' subtitle='<Card><h3>This is Card AB Component</h3></Card>'>
      <div className='DSalurabook__ABCard'>
        <div className='DSalurabook__ABCard--component'>
          <Card><h3>This is Card AB Component</h3></Card>
        </div>
      </div>
    </ComponentVariable>
      

    <ComponentVariable title='ABInput' subtitle='<ABInput label="your custom label" type= "text" | "email" | "password" | "date"  onChange={(value: typeSelected) => {console.log(value)}} />'>
      <br />
      <ABInput label='custom label' type='text' value={inpuState} onChange={(e: string) => setInputState(e)} />
    </ComponentVariable>

    <ComponentVariable title='ABInputQuant'>
    <div className='DSalurabook__ABInputQuant'>
        <div className='DSalurabook__ABInputQuant--component'>
          <AbInputQuant onChange={() => {}} />
        </div>
        <div className='DSalurabook__ABInputQuant--image'></div>
    </div>
      
    </ComponentVariable>
    <br />
        
    <ComponentVariable title='ABOptionGoup' subtitle='Componente de seleção'>
      <div className='DSalurabook__ABOptionGroup'>
        <div className='DSalurabook__ABOptionGroup--component'>
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
      </div>
      <div className='DSalurabook__ABOptionGroup--image'></div>
      </div>
      
      <div>
      
      </div>
      
        <br /><br />
    </ComponentVariable>
      
      
        <br /><br /><br />

    </div>
  );
}

export default DSalurabook;