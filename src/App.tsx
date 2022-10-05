import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import DSalurabook from './Pages/DSalurabook/DSalurabooks';
import Container from './Components/Container';
import Header from './Components/Header/Header';
import Footer from './Components/Footer';
import Buttons from './Pages/Buttons';
import NotFound from './Pages/NotFound';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Container>
       <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="Buttons" element={<Buttons />} />
        <Route path="DSalurabook" element={<DSalurabook />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </Container>
      <Footer />
      </BrowserRouter>      
    </div>
  );
}

export default App;


