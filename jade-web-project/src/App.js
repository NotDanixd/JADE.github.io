import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Menu from './components/Menu';
import VideoUpload from './components/VideoUpload';
import Clips from './pages/Clips';
import Category from './pages/Category';
import Rewind from './pages/Rewind';
import Discord from './pages/Discord';
import Login from './pages/Login';
import './styles/main.css';

function App() {
  const [clips, setClips] = useState({
    rainbow: [],
    repo: [],
  });
  const [rewind, setRewind] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Función para subir clips por juego
  const handleClipUpload = (game, file) => {
    setClips(prev => ({
      ...prev,
      [game]: [...prev[game], URL.createObjectURL(file)]
    }));
  };

  // Función para subir videos a rewing
  const handleRewindUpload = (file) => {
    setRewind(prev => [...prev, URL.createObjectURL(file)]);
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <Menu />
        <main style={{ maxWidth: 900, margin: "0 auto", background: "rgba(255,255,255,0.7)", borderRadius: "1.5rem", padding: "2rem" }}>
          <Routes>
            <Route path="/" element={<VideoUpload />} />
            <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/clips" element={<Clips />} />
            <Route path="/clips/:category" element={<Category isLoggedIn={isLoggedIn} />} />
            <Route path="/rewind" element={<Rewind isLoggedIn={isLoggedIn} />} />
            <Route path="/discord" element={<Discord />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;