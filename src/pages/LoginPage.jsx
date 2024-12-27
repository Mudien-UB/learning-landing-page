import React from 'react';
import { useNavigate } from 'react-router-dom';


const LoginPage = () => {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => { 
        event.preventDefault();
        localStorage.setItem('isAuthenticated', true);
        navigate('/dashboard');
    }

    return (
        <section>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder='The email is yours@gmail.com'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="The Password is secret"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
        </section>
    );
}

export default LoginPage;
