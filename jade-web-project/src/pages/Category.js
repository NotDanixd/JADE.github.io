import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Category = ({ isLoggedIn }) => {
    const { category } = useParams();
    const [videos, setVideos] = useState(() => {
        const savedVideos = localStorage.getItem(`videos-${category}`);
        return savedVideos ? JSON.parse(savedVideos) : [];
    });
    const [title, setTitle] = useState("");

    useEffect(() => {
        localStorage.setItem(`videos-${category}`, JSON.stringify(videos));
    }, [videos, category]);

    const handleVideoUpload = (file) => {
        if (file && title.trim()) {
            const videoURL = URL.createObjectURL(file);
            setVideos(prev => [...prev, { title, src: videoURL }]);
            setTitle(""); // Clear the title input after upload
        } else {
            alert("Por favor, selecciona un archivo y escribe un título.");
        }
    };

    const handleDeleteVideo = (index) => {
        const confirmDelete = window.confirm("¿Estás seguro de que quieres eliminar este video?");
        if (confirmDelete) {
            setVideos(prev => prev.filter((_, i) => i !== index));
        }
    };

    return (
        <div>
            <h2>Videos de {category}</h2>
            {isLoggedIn && (
                <>
                    <input
                        type="text"
                        placeholder="Escribe un título para el video"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        style={{
                            display: "block",
                            marginBottom: "1rem",
                            padding: "0.5rem",
                            width: "100%",
                            maxWidth: "400px",
                            borderRadius: "5px",
                            border: "1px solid #ccc"
                        }}
                    />
                    <label
                        htmlFor="file-upload"
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
                        id="file-upload"
                        type="file"
                        accept="video/*"
                        onChange={e => handleVideoUpload(e.target.files[0])}
                        style={{ display: "none" }}
                    />
                </>
            )}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginTop: "1rem" }}>
                {videos.map((video, i) => (
                    <div key={i} style={{ textAlign: "center", width: "200px" }}>
                        <h4 style={{ marginBottom: "0.5rem" }}>{video.title}</h4>
                        <video src={video.src} controls width="200" style={{ marginBottom: "0.5rem" }} />
                        {isLoggedIn && (
                            <div style={{ textAlign: "center" }}>
                                <button
                                    onClick={() => handleDeleteVideo(i)}
                                    style={{
                                        background: "#ff4d4d",
                                        color: "white",
                                        border: "none",
                                        borderRadius: "5px",
                                        padding: "5px 10px",
                                        cursor: "pointer",
                                        display: "inline-block"
                                    }}
                                >
                                    Eliminar
                                </button>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Category;
