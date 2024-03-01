import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route element={<Menu />}></Route>
        <Route exact path = '/' element={<Home/>}></Route>
        <Route exact path = '/About' element={<About/>}></Route>
        <Route exact path ='/Footer' element={<Footer/>}></Route>
      </Routes>
      </BrowserRouter>
        
    </div>
  );
}

export default App;
