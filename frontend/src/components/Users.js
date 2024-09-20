import React, { useEffect, useState } from 'react';
// Bibliothèque pour faire des requêtes HTTP vers notre api node
import axios from 'axios';

// création du composant User
function Users()
{
    // useState([]) initialise l'état users avec un tableau vide.
    // setUsers est utilisé pour mettre à jour cet état.
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/users/getAllUser') // Appel vers notre API
        .then(response => setUsers(response.data))
        .catch(error => console.error(error));
    }, []);

    return (
        <div>
          <h2>Liste des utilisateurs</h2>
          <ul>
            {users.map(user => (
              <li key={user.id}>{user.username}</li>
            ))}
          </ul>
        </div>
      );
}

export default Users;