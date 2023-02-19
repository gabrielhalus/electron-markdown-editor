import React, { useEffect, useState } from 'react';
import path from 'path';
import fs from 'fs';

const Sidebar = () => {
  const [files, setFiles] = useState<fs.Dirent[]>([]);

  useEffect(() => {
    fs.readdir('public/documents', { withFileTypes: true }, (err, docs) => {
      if (err) return;
      setFiles(docs);
    });
  }, []);

  return (
    <div id='Sidebar'>
      <ul id='Explorer'>
        <h2 className='headline headline--vibrant headline--secondary'>Notes</h2>
        {files.map(file => (
          <li className='Explorer__Item' key={file.name}>
            <span className={`Item__Icon ${file.isDirectory() ? 'dir' : 'file'}`}>
              {file.isDirectory() ? '􀈕' : '􀈿'}
            </span>
            {path.parse(file.name).name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
