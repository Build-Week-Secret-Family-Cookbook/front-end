import './App.css';
import { Routes, Route } from 'react-router-dom';


import Navbar from './components/Navbar';
import About from './components/pages/About';
import Categories from './components/pages/Categories';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Logout from './components/pages/Logout'

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route exact path="/about" element={<About />} />
        <Route exact path="/categories" element={<Categories />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/logout" element={<Logout />} />


      </Routes>
      <h1>COOK BOOK BUDS</h1>
    </div>
  );
}

export default App;
