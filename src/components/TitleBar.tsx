import React from 'react';
import fs from 'fs';

const newFolder = () => {
  const folderName: string = Date.now().toString();
  fs.mkdir(`public/documents/${folderName}`, err => {
    if (err) return;
  });
};

const TitleBar = () => {
  return (
    <div id='Titlebar'>
      <button className='btn'>􀈂</button>
      <button className='btn' onClick={newFolder}>
        􀅼
      </button>
    </div>
  );
};

export default TitleBar;
