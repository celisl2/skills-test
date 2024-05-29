import { useState } from 'react';
import './App.css';
import CensusDataTable from './CensusDataTable';
import StatePicker from './StatePicker';

interface StateData {
  stateName: string,
  stateCode: number,
}
//in WA (from 2022 ACS Data)
function App() {
  const [currentState, setCurrentSate] = useState<StateData>({ stateName: "Washington", stateCode: 53});

  return (
    <div>
      <header className="App-header">
        Spanish Speakers in {currentState.stateName} (from 2022 ACS Data)
      </header>
      <div className="App">
        {/* {currentState?.length === 0 ?  <StatePicker selectedSate={53}/> : <CensusDataTable selectedSate={0}/>} */}
        <StatePicker selectedSate={53}/>
        <CensusDataTable selectedSate={53}/>
      </div>
    </div>
  );
}

export default App;
