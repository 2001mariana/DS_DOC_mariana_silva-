import './App.css';
import Home from './Pages/Home/Home';
import { Routes, Route, Link } from "react-router-dom";

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
