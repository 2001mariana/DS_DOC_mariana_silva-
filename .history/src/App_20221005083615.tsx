import './App.css';
import Home from './Pages/Home/Home/Home';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import DSalurabook from './DSalurabook';
import Container from './Components/Container';
import Header from './Components/Header/Header';
import Footer from './Components/Footer';

function App() {

  return (
    <div className="App App__container">
      <div>

      </div>
      <BrowserRouter>
      <Header />
      <Container>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="DSalurabook" element={<DSalurabook />} />
      </Routes>
      </Container>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;