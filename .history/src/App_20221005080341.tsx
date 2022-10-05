import './App.css';
import Home from './Pages/Home/Home/Home';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import DSalurabook from './DSalurabook';
import Container from './Components/Container';
import Header from './Components/Header';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Container>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="DSalurabook" element={<DSalurabook />} />
      </Routes>
      </Container>
      <Foo
      </BrowserRouter>
    </div>
  );
}

export default App;
