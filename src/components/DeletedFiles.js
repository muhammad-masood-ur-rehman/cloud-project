import React from 'react';
import { useNavigate } from 'react-router-dom';
import './DeletedFiles.css';

const DeletedFiles = ({ deletedFiles, restoreFile }) => {
  const navigate = useNavigate();

  const handleRestore = (index) => {
    restoreFile(index);
  };

  return (
    <div className="deleted-files">
      <h2>Deleted Files</h2>
      <button onClick={() => navigate('/')}>Back</button>
      <table>
        <thead>
          <tr>
            <th>File Name</th>
            <th>Upload Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {deletedFiles.map((file, index) => (
            <tr key={index}>
              <td>{file.name}</td>
              <td>{file.uploadDate}</td>
              <td>
                <button onClick={() => handleRestore(index)}>Restore</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DeletedFiles;
