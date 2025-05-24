import React from 'react';
import { useNavigate } from 'react-router-dom';

const Clips = () => {
    const categories = [
        'GTA',
        'Minecraft',
        'Rainbow Six Siege',
        'Fortnite',
        'EuroTruck',
        'F1',
        'Phasmo',
        'RocketLeague'
    ];

    const navigate = useNavigate();

    const handleCategorySelect = (category) => {
        navigate(`/clips/${category}`);
    };

    return (
        <div>
            <h2>Selecciona una Categoría</h2>
            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)", // Two columns
                gap: "1rem",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "2rem"
            }}>
                {categories.map(category => (
                    <button
                        key={category}
                        onClick={() => handleCategorySelect(category)}
                        style={{
                            width: "100%",
                            height: "100px", // Fixed height for uniform size
                            background: "#7fa896",
                            color: "white",
                            border: "none",
                            borderRadius: "1rem",
                            cursor: "pointer",
                            fontSize: "1.2rem",
                            fontWeight: "bold",
                            transition: "background 0.3s"
                        }}
                        onMouseOver={(e) => e.target.style.background = "#2c7970"}
                        onMouseOut={(e) => e.target.style.background = "#7fa896"}
                    >
                        {category}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Clips;
