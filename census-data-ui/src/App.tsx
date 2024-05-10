import './App.css';
import CensusDataTable from './CensusDataTable';

function App() {
  return (
    <div>
      <header className="App-header">
        Spanish Speakers in WA (from 2022 ACS Data)
      </header>
      <div className="App">
        <CensusDataTable/>
      </div>
    </div>
  );
}

export default App;
