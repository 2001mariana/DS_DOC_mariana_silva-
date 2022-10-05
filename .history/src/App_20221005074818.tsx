import './App.css';
import Home from './Pages/Home/Home';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import DSalurabook from './DSalurabook';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="DSalurabook" element={<DSalurabook />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
