import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path = '/' element={<Menu />}></Route>
        <Route exact path = '/About' element={<About/>}></Route>
      </Routes>
      </BrowserRouter>
        
    </div>
  );
}

export default App;
