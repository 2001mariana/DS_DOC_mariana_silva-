import { ABbutton, AB, Card } from 'designsystem-marianasilva';

import './App.css';

function App() {
  return (
    <div className="App">
      <Card > 
        <ABbutton color='Primary' text='button primary small' size='small' />
        <ABbutton color='Secondary' text='button secundário small' size='small' />
        <ABbutton color='Secondary' text='button secundário large' size='large' />
        <ABbutton color='Primary' text='button primary large' size='large' />
        <ABTag texto="Tag" />
      </Card>

  
    </div>
  );
}

export default App;
