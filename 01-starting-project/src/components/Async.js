import React, { useEffect, useState } from 'react'

const Async = () => {
    const [posts, setPostes] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((data) => setPostes(data))
    }, [])
    return (
        <div>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default Async
