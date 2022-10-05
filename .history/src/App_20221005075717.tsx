import './App.css';
import Home from './Pages/Home/Home/Home';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import DSalurabook from './DSalurabook';
import Container from './Components/Container';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Container>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="DSalurabook" element={<DSalurabook />} />
      </Routes>
      </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
