import React from 'react';
import './App.scss';
import Sidebar from './components/Sidebar';
import TitleBar from './components/TitleBar';

function App() {
  return (
    <div id='App'>
      <TitleBar />
      <Sidebar />
      <div id='Main'></div>
    </div>
  );
}

export default App;
