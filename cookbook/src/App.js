import './App.css';
import { Routes, Route } from 'react-router-dom';


import Navbar from './components/Navbar';
import About from './components/pages/About';
function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route exact path="/about" element={<About />} />
      </Routes>
      <h1>COOK BOOK BUDS</h1>
    </div>
  );
}

export default App;
