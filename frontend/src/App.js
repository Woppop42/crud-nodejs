
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Button } from '@mui/material';
import PrivateRoute from './components/PrivateRoute';
import Users from './components/Users';
import Posts from './components/Posts';
import Inscription from './components/Inscription';
import Login from './components/Login';


function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Button variant="contained"><Link to="/login">Se connecter</Link></Button>  
          <Button variant="contained"><Link to="/users">Utilisateurs</Link></Button>
          <Button variant="contained"><Link to="/posts">Posts</Link></Button>
          <Button variant="contained"><Link to="/inscription">Inscription</Link></Button>
        </nav>
        <Routes>
          {/* Route pour afficher les utilisateurs */}
          <Route path="/users" element={<PrivateRoute element={<Users/>}/>}/>
          {/* Route pour afficher les posts */}
          <Route path="/posts" element={<PrivateRoute element={<Posts/>}/>}/>
          {/* Route pour s'inscrire */}
          <Route path="/inscription" element={<Inscription />}/>
          {/* Route pour la connexion */}
          <Route path="/login" element={<Login />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;


