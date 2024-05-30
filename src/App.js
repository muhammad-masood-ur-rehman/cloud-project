import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import FileUpload from './components/FileUpload';
import FileTable from './components/FileTable';
import DeletedFiles from './components/DeletedFiles';

function UploadHistoryTab({ files }) {
  return (
    <div>
      <h2 className='upload-hist-header'>Upload History</h2>
      <p className='upload-hist-count'>{`${files.length}`}</p>
    </div>
  );
}

function App() {
  const [files, setFiles] = useState([
    { name: 'example_file1.txt', uploadDate: '2024-05-28' },
    { name: 'example_file2.txt', uploadDate: '2024-05-29' },
    { name: 'example_file3.txt', uploadDate: '2024-05-30' }
  ]);

  const [deletedFiles, setDeletedFiles] = useState([]);

  const handleDelete = (index) => {
    const newFiles = [...files];
    const deletedFile = newFiles.splice(index, 1)[0];
    setFiles(newFiles);
    setDeletedFiles([...deletedFiles, deletedFile]);
  };

  const handleRestore = (index) => {
    const newDeletedFiles = [...deletedFiles];
    const restoredFile = newDeletedFiles.splice(index, 1)[0];
    setDeletedFiles(newDeletedFiles);
    setFiles([...files, restoredFile]);
  };

  return (
    <Router>
      <div className="App">
        <Navbar deletedCount={deletedFiles.length} />
        <Routes>
          <Route path="/" element={
            <>
              <FileUpload />
              <UploadHistoryTab files={files} />
              <FileTable files={files} onDelete={handleDelete} />
            </>
          } />
          <Route path="/deleted-files" element={
            <DeletedFiles className='App' deletedFiles={deletedFiles} restoreFile={handleRestore} />
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
