import React, { useState } from 'react';

const VideoUpload = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [gameCategory, setGameCategory] = useState('');
    const [videoSrc, setVideoSrc] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);

        if (file) {
            const videoURL = URL.createObjectURL(file);
            setVideoSrc(videoURL);
        }
    };

    const handleCategoryChange = (event) => {
        setGameCategory(event.target.value);
    };

    const handleUpload = () => {
        if (selectedFile && gameCategory) {
            // Logic to handle file upload goes here
            console.log(`Uploading ${selectedFile.name} categorized under ${gameCategory}`);
        } else {
            alert('Please select a file and a game category.');
        }
    };

    return (
        <div className="video-upload" style={{ textAlign: "center", marginTop: "2rem" }}>
            <h2>Upload and View Your Video</h2>
            <input type="file" accept="video/*" onChange={handleFileChange} />
            <select value={gameCategory} onChange={handleCategoryChange}>
                <option value="">Select Game Category</option>
                <option value="Game 1">Game 1</option>
                <option value="Game 2">Game 2</option>
                <option value="Game 3">Game 3</option>
            </select>
            <button onClick={handleUpload}>Upload</button>
            {videoSrc && (
                <div style={{ marginTop: "1rem" }}>
                    <h3>Uploaded Video:</h3>
                    <video src={videoSrc} controls width="600" style={{ border: "1px solid #ccc", borderRadius: "8px" }} />
                </div>
            )}
        </div>
    );
};

export default VideoUpload;