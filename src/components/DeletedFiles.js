import React from 'react';
import './DeletedFiles.css'; // Import the CSS file

const DeletedFiles = ({ deletedFiles, restoreFile }) => {
  const handleRestore = (index) => {
    restoreFile(index);
  };

  return (
    <div className="table-container">
      <h2 className="header">Deleted Files</h2>
      <table className="file-table-container">
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
