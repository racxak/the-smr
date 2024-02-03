import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import About from './components/pages/About';
import "./App.css"

function App() {
  return (<>
  <Navbar></Navbar>
  <Routes>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/projects" element={<About/>}></Route>
    <Route path="/contact" element={<About/>}></Route>
    <Route path="/cart" element={<About/>}></Route>

  </Routes>
  </>
  );
}

export default App;
