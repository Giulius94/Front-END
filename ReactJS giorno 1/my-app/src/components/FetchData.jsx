
import React, { useState, useEffect } from 'react';

function FetchData() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                setData(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    let obj = JSON.stringify(data, null, 2)

    return (
        <div>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>City</th>
                </tr>
                {obj.map(ele => 
                <tr>
                    <td>{ele.name}</td>
                    <td>{ele.username}</td>
                    <td>{ele.city}</td>
                </tr>)}
            </table>
        </div>
    ); 
}

export default FetchData;