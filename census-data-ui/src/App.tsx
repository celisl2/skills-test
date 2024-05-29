import { useState } from 'react';
import './styles/App.css';
import CensusDataTable from './components/CensusDataTable';
import StatePicker from './components/StatePicker';
import { StateData } from './models/StateData';
import { Alert } from '@mui/material';

function App() {
  const [selectedState, setSelectedState] = useState<StateData>({} as StateData);

  return (
    <div>
      <h1 className="rubik-font">Spanish Speakers by State</h1>
      <div className="App">
        <StatePicker selectedSate={selectedState} onUpdate={setSelectedState}/>
        {selectedState.stateName !== undefined && <Alert className='alert' severity="info">Showing Spanish Speakers in {selectedState.stateName} (from 2022 ACS Data)</Alert>}
        <CensusDataTable selectedSate={selectedState}/>
      </div>
      {selectedState.stateName !== undefined && (
        <footer>
          <p>Data provided by the American Community Survey</p>
        </footer>
      )}
    </div>
  );
}

export default App;