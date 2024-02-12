import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useNavigate();
    const [error, setError] = useState('');


    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            history('/home');
        }
    }, [history]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/auth', {
                email,
                password
            });
            const { data } = response;
            if (data && data.token) {
                const token = data.token;
                localStorage.setItem('token', token);
    
                if (data.data && data.data.role) {
                    const role = data.data.role;
                    localStorage.setItem('role', role);
    
                    if (role === 'admin') {
                        history('/dashboard');
                    } else {
                        history('/home');
                    }
                } else {
                    setError('User role not found in response data');
                }
            } else {
                setError('Invalid response from server');
            }
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                setError(error.response.data.message);
            } else {
                setError('An error occurred while processing your request');
            }
        }
    };
    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        aria-describedby="emailHelp"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {error && <div style={{ color: 'red' }}>{error}</div>}
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <p>Don't have an account? <Link to="/register-user">Register here</Link></p>
        </div>
    );
}

export default LoginPage;
