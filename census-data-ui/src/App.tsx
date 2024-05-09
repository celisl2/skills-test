import './App.css';
import DataTable from './dataTable';

function App() {
  return (
    <div>
      <header className="App-header">
        Spanish Speakers in WA (from 2022 ACS Data)
      </header>
      <div className="App">
        <DataTable/>
      </div>
    </div>
  );
}

export default App;
