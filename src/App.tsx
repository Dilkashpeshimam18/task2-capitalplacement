import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="app">
      <div className='container1'>
        <Sidebar />

      </div>
      <div className='container2'>
        <Header />
        <Main />

      </div>

    </div>
  );
}

export default App;
