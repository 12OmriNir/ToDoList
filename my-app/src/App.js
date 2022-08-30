import './App.css';
import Home from './pages/Home';
import {Route, Routes} from 'react-router-dom'
import About from './pages/About';
import Navbar from './comps/navbar';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
