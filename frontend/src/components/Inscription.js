import React, { useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Inscription() {
    // Hook qui gère définit et gère le comportement du composant
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    // Hook pour la navigation
    const navigate = useNavigate();

    // Gestion des chagements dans les champs du formulaires
    const handleChange = (e) => {
        setFormData({
            // Copie les valeurs du formulaires dans un nouvel objet
            ...formData,
            // Met à jour uniquement le champ sélectionné
            [e.target.name]: e.target.value


        });
    };

    // Gestion de la soumission du formulaire
    const handleSubmit = (e) => {
        // Préviens le rechargement de la page lors de l'envoi du formulaire
        e.preventDefault();
        // Appel de l'API pour enregistrer l'utilisateur
        axios.post('http://localhost:8000/api/users/createUser', formData)
        .then(response => {
            console.log('Utilisateur bien enregistré: ', response.data);
            // Redirection vers la page d'accueil grâce au hook useNavigate()
            navigate('/');
        })
        .catch(error => {
            console.error('Erreur lors de l\'enregistrement.', error)
        });

    };

    // Retour de la vue
    return (
        <div>
      <h2>Inscription</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nom :</label>
          <input
            type="text"
            name="username"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
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
        <button type="submit">S'inscrire</button>
      </form>
    </div>
  )
    
}

export default Inscription;