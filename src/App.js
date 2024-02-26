import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path = '/' element={<Menu />}></Route>
        {/* <Route exact path = '/AboutUs' element={<About-us />}></Route> */}
      </Routes>
      </BrowserRouter>
        
    </div>
  );
}

export default App;
