import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setIsLoggedIn }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        if (username === 'JADE' && password === 'T75h;s/UC_4;') {
            setIsLoggedIn(true);
            alert('Inicio de sesión exitoso');
            navigate('/clips');
        } else {
            alert('Credenciales incorrectas');
        }
    };

    return (
        <div style={{ textAlign: "center" }}>
            <h2>Iniciar Sesión</h2>
            <input
                type="text"
                placeholder="Usuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={{
                    display: "block",
                    margin: "1rem auto",
                    padding: "0.5rem",
                    width: "100%",
                    maxWidth: "300px",
                    borderRadius: "5px",
                    border: "1px solid #ccc"
                }}
            />
            <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{
                    display: "block",
                    margin: "1rem auto",
                    padding: "0.5rem",
                    width: "100%",
                    maxWidth: "300px",
                    borderRadius: "5px",
                    border: "1px solid #ccc"
                }}
            />
            <button
                onClick={handleLogin}
                style={{
                    padding: "0.7rem 1.5rem",
                    background: "#7fa896",
                    color: "white",
                    borderRadius: "1rem",
                    cursor: "pointer",
                    fontSize: "1rem",
                    fontWeight: "bold",
                    transition: "background 0.3s"
                }}
                onMouseOver={(e) => e.target.style.background = "#2c7970"}
                onMouseOut={(e) => e.target.style.background = "#7fa896"}
            >
                Iniciar Sesión
            </button>
        </div>
    );
};

export default Login;
