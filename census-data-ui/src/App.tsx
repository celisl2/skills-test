import React from 'react';
import logo from './logo.svg';
import './App.css';
import DataTable from './dataTable';

function App() {
  return (
    <div>
      <header className="App-header">
        Census Data from WA
      </header>
      <div className="App">
        <DataTable/>
      </div>
    </div>
  );
}

export default App;
