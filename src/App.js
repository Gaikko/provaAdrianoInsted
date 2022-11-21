import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/Weather/Index';
import Home from './pages/Home/Home';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path='/' element={<Home btnIr = "Acessar!"/>}></Route>
            <Route path='/weather' element={<Index/>}></Route>
          </Routes>
        </BrowserRouter>
        <Footer/>
      </header>
    </div>
  );
}

export default App;
