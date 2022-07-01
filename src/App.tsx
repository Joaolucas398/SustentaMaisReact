import React from 'react';
import Navbar from './components/estaticos/navbar/Navbar';
import Home from './pages/home/Home';
import Footer from './components/estaticos/footer/Footer';
import Login from './pages/login/Login';
import Sobre from './pages/sobrenos/Sobre';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ minHeight: '100vh' }}>
        <Routes> // Antigo Switch
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          {/* <Route path="/cadastro" element={<CadastroUsuario />} /> */}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;

