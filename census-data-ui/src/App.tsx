import { useState } from 'react';
import './App.css';
import CensusDataTable from './components/CensusDataTable';
import StatePicker from './components/StatePicker';
import { StateData } from './models/StateData';

function App() {
  const [selectedState, setSelectedState] = useState<StateData>({ stateName: "Washington", stateCode: "53"});

  return (
    <div>
      <header className="App-header">
        Spanish Speakers in {selectedState.stateName} (from 2022 ACS Data)
      </header>
      <div className="App">
        {/* {currentState?.length === 0 ?  <StatePicker selectedSate={53}/> : <CensusDataTable selectedSate={0}/>} */}
        <StatePicker selectedSate={selectedState} onUpdate={setSelectedState}/>
        <CensusDataTable selectedSate={selectedState}/>
      </div>
    </div>
  );
}

export default App;
