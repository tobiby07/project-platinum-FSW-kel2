import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './login-register.css'
import InputForm from './assets/input-form';
import Button from './assets/button';

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
        <div className="container p-4">
            <h3>MASUK</h3>
            <div className="login-line"></div>
            <p>Jika Anda sudah memiliki akun, silahkan masuk dengan menggunakan alamat email Anda</p>
            <form onSubmit={handleSubmit}>
                <InputForm conten={"Email"} value={email} type={"email"} placeholder={"masukan email anda"} id={"email"} onChange={(e) => setEmail(e.target.value)} />
                <InputForm conten={"Password"} value={password} type={"password"} placeholder={"masukan password"} id={"password"} onChange={(e) => setPassword(e.target.value)}/>
                {error && <div style={{ color: 'red' }}>{error}</div>}
                <Button type={"submit"} conten={"LOGIN"}/>
                <p className="text-center">Belum memiliki akun? <Link to="/register-user">Daftar disini</Link></p>
            </form>
        </div>
    );
}


export default LoginPage;
