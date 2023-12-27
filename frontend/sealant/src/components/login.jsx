import React, { useState } from 'react';

import axios from 'axios';

const Login = () => {
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/v1/login/', credentials);
            const { token, refreshToken } = response.data;

            // Store the tokens in localStorage or secure cookie for later use
            localStorage.setItem('token', token);
            localStorage.setItem('refreshToken', refreshToken);

            // Redirect or perform other actions upon successful login
            console.log('successful login');
        } catch (error) {
            // Handle login error
            console.log('login error: ' + error)
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="username"
                value={credentials.username}
                onChange={handleChange}
            />
            <input
                type="password"
                name="password"
                value={credentials.password}
                onChange={handleChange}
            />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;