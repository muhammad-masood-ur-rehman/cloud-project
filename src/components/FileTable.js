import React from 'react';
import './FileTable.css'; // Import the CSS file

function FileTable({ files, onDelete }) {
  return (
    <div className="file-table-container">
      <table>
        <thead>
          <tr>
            <th>File Name</th>
            <th>Upload Date</th>
            <th>Action</th> 
          </tr>
        </thead>
        <tbody>
          {files.map((file, index) => (
            <tr key={index}>
              <td>{file.name}</td>
              <td>{file.uploadDate}</td>
              <td><button onClick={() => onDelete(index)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FileTable;
