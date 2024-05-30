// src/components/FileUpload.js
import React, { useState } from 'react';
import './FileUpload.css';

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileUpload = () => {
    if (selectedFile) {
      console.log('Uploading file:', selectedFile);
      // Add file upload logic here
    } else {
      console.log('No file selected');
    }
  };

  return (
    <div className="file-upload-container">
      <div className="file-upload">
        <img src="upload.png" alt="Upload Icon" className="upload-icon" />
        <input type="file" onChange={handleFileChange} />
        <p>Drag and drop a file here, or click to select a file</p>
        <button onClick={handleFileUpload}>Upload</button>
      </div>
     
    </div>
  );
};

export default FileUpload;
