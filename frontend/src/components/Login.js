import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login()
{
    const [formData, setFormData] = useState({email: '', password: ''});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    
    // Prise en charge des entrées de l'utilisateur
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }
    
    // Gestion de la soumission
    const handleSubmit = (e) => {
        // On prévient le rechargement de la page et si un formulaire est déjà en cours d'envoi
        e.preventDefault();
        if(isSubmitting) return false;
        // Envoi du formulaire
        setIsSubmitting(true);
    
        axios.post('http://localhost:8000/api/users/login', formData)
        .then(response => {
            localStorage.setItem('token', response.data.token)
            console.log("Utilisateur connecté.", response.data);
            navigate("/");
    
        })
        .catch(error => {
            setError(error.reponse?.data?.message || "Une erreur est survenue");
            setIsSubmitting(false);
        });
    }


    return (
        <div>
          <h2>Connexion</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Email :</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Mot de passe :</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" disabled={isSubmitting}>Se connecter</button>
            {error && <p>{error}</p>}
          </form>
        </div>
      );
    


}
export default Login;
