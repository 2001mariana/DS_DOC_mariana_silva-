import { ABbutton, ABTag, Card } from 'designsystem-marianasilva';

import './App.css';

function App() {
  return (
    <div className="App">
      
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

      
    </div>
  );
}

export default App;
