import React, { useEffect, useState } from 'react';
// Bibliothèque pour faire des requêtes HTTP vers notre api node
import axios from 'axios';

function Posts() {

    const [posts, setPosts] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8000/api/posts/getPosts")
        .then(response => {console.log(response.data); setPosts(response.data)})
        .catch(error => console.error(error));
    }, []);

    return(
        <div>
            <h2>Liste de tous les postes</h2>
            <ul>
            {posts.map(post => (
              <li key={post._id}>{post.message}</li>
            ))}
            </ul>
        </div>
    )
}

export default Posts;

