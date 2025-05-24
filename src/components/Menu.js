import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <nav style={{
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
            marginTop: "1rem",
            background: "linear-gradient(90deg, #7fa896, #2c7970, #8fb29e)",
            padding: "1rem",
            borderRadius: "1rem"
        }}>
            <Link to="/" style={{
                textDecoration: "none",
                color: "white",
                padding: "0.5rem 1rem",
                borderRadius: "1rem",
                background: "rgba(255, 255, 255, 0.2)"
            }}>Menu</Link>
            <Link to="/clips" style={{
                textDecoration: "none",
                color: "white",
                padding: "0.5rem 1rem",
                borderRadius: "1rem",
                background: "rgba(255, 255, 255, 0.2)"
            }}>Clips</Link>
            <Link to="/rewind" style={{
                textDecoration: "none",
                color: "white",
                padding: "0.5rem 1rem",
                borderRadius: "1rem",
                background: "rgba(255, 255, 255, 0.2)"
            }}>Rewind</Link>
            <Link to="/discord" style={{
                textDecoration: "none",
                color: "white",
                padding: "0.5rem 1rem",
                borderRadius: "1rem",
                background: "rgba(255, 255, 255, 0.2)"
            }}>Discord</Link>
            <Link to="/login" style={{
                textDecoration: "none",
                color: "white",
                padding: "0.5rem 1rem",
                borderRadius: "1rem",
                background: "rgba(255, 255, 255, 0.2)"
            }}>Login</Link>
        </nav>
    );
};

export default Menu;