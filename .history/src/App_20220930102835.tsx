import { ABbutton, Card } from 'designsystem-marianasilva';

import './App.css';

function App() {
  return (
    <div className="App">
      <Card > Este card é para mostrar meu button primary small 
        <ABbutton color='Primary' text='button primary small' size='small' />
      </Card>

      <Card > Este card é para mostrar meu button primary large 
        <ABbutton color='Primary' text='button primary large' size='large' />
      </Card>

      <Card > Este card é para mostrar meu button secundário large 
        <ABbutton color='Secondary' text='button secundário large' size='large' />
      </Card>

      <Card > Este card é para mostrar meu button secundário small 
        <ABbutton color='Secondary' text='button secundário small' size='small' />
      </Card>
    </div>
  );
}

export default App;
