
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Users from './components/Users';
import Posts from './components/Posts';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/users">Utilisateurs</Link>
        </nav>
        <Routes>
          {/* Route pour afficher les utilisateurs */}
          <Route path="/users" element={<Users />} />
          {/* Route pour afficher les posts */}
          <Route path="/posts" element={<Posts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


