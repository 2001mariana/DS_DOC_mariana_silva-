import { ABbutton, Card } from 'designsystem-marianasilva';

import './App.css';

function App() {
  return (
    <div className="App">
      <Card > Este card é para mostrar meu button primary small 
        <ABbutton color='Primary' text='button primary small' size='small' />
      </Card>

      <Card > Este card é para mostrar meu button primary l 
        <ABbutton color='Primary' text='button primary l' size='l' />
      </Card>
    </div>
  );
}

export default App;
