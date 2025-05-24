import React, { useState } from 'react';

const Rewind = ({ isLoggedIn }) => {
    const [rewind, setRewind] = useState([]);

    const handleRewindUpload = (file) => {
        setRewind(prev => [...prev, URL.createObjectURL(file)]);
    };

    return (
        <div>
            <h2>Rewind</h2>
            {isLoggedIn && (
                <>
                    <label
                        htmlFor="rewind-upload"
                        style={{
                            display: "inline-block",
                            padding: "0.7rem 1.5rem",
                            background: "#7fa896",
                            color: "white",
                            borderRadius: "1rem",
                            cursor: "pointer",
                            fontSize: "1rem",
                            fontWeight: "bold",
                            textAlign: "center",
                            transition: "background 0.3s"
                        }}
                        onMouseOver={(e) => e.target.style.background = "#2c7970"}
                        onMouseOut={(e) => e.target.style.background = "#7fa896"}
                    >
                        Seleccionar Archivo
                    </label>
                    <input
                        id="rewind-upload"
                        type="file"
                        accept="video/*"
                        onChange={e => handleRewindUpload(e.target.files[0])}
                        style={{ display: "none" }}
                    />
                </>
            )}
            <div style={{ marginTop: "1rem" }}>
                {rewind.map((src, i) => (
                    <video key={i} src={src} controls width="200" style={{ margin: "10px 0" }} />
                ))}
            </div>
        </div>
    );
};

export default Rewind;
