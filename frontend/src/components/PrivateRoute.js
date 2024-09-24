import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({element: Component}) => {

    // Vérification de la présence du token
    const token = localStorage.getItem('token');
    // Si aucun token l'utilisateur est renvoyé à la page de connexion
    return token ? Component : <Navigate to="/login" />
}

export default PrivateRoute;