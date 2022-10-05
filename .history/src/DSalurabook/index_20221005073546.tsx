import { ABbutton, ABInput, AbInputQuant, ABOptionGroup, ABTagimport { useState } from 'react';
import ComponentVariable from '../Components/ComponentVariable';

function DSalurabook() {
  const [inpuState, setInputState] = useState<string>('')

  return (
    <div className="DSalurabook">
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

export default DSalurabook;
