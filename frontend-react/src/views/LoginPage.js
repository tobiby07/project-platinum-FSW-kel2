import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import InputForm from './assets/input-form';
import Button from './assets/button';
import logo from './assets/image/logo.png'
import pictureLogin from './assets/image/login-pic.png'

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
        const { token, data: { role } } = data;
        localStorage.setItem('token', token);
        if (role) {
          localStorage.setItem('role', role);
          history(role === 'admin' ? '/dashboard' : '/home');
        } else {
          setError('User role not found in response data');
        }
      } else {
        setError('Invalid response from server');
      }
    } catch (error) {
      setError(error.response?.data?.message || 'An error occurred while processing your request');
    }
  };

  return (
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: "1rem" }}>
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src={pictureLogin}
                    alt="login form"
                    className="img-fluid"
                    style={{ borderRadius: "1rem 0 0 1rem" }}
                  />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <form onSubmit={handleSubmit}>
                      <div className="d-flex align-items-center mb-3 pb-1">
                        <i
                          className="fas fa-cubes fa-2x me-3"
                          style={{ color: "#ff6219" }}
                        />
                        <span className="h1 fw-bold mb-0"><img  src={logo} className='sm' alt="" /></span>
                      </div>
                      <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: 1 }}> Sign into your account</h5>
                      <InputForm conten={"Email"} value={email} type={"email"} placeholder={"masukan email anda"} id={"email"} onChange={(e) => setEmail(e.target.value)} />
                      <InputForm conten={"Password"} value={password} type={"password"} placeholder={"masukan password"} id={"password"} onChange={(e) => setPassword(e.target.value)} />
                      {error && <div style={{ color: 'red' }}>{error}</div>}
                      <div className="pt-1 mb-4">
                        <Button type={'submit'} conten={'Login'} />
                      </div>
                      <a className="small text-muted" href="#!">Forgot password?</a>
                      <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>Don't have an account?{" "}<a href="/register-user" style={{ color: "#393f81" }}>Register here</a></p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginPage;
