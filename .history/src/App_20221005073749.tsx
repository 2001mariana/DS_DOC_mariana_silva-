import './App.css';
import Home from './Pages/Home/Home';
import { Routes, Route } from "react-router-dom";
import DSalurabook from './DSalurabook';

function App() {

  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="DSalurabook" element={<DSalurabook />} />
      </Routes>
    </div>
  );
}

export default App;
