import { Box, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from "@mui/material";
import useAxios from "axios-hooks";

import { useEffect, useState } from "react";

const STATE_CODES_URL = "https://api.census.gov/data/2022/acs/acs5?get=NAME&for=state:*"


interface StateData {
    stateName: string,
    stateCode: number,
}

//export default function StatePicker({selectedSate, navs, setCurrentSate} : {selectedSate: number, navs:StateData, setCurrentSate:React.Dispatch<React.SetStateAction<StateData>>}) {
export default function StatePicker({selectedSate} : {selectedSate: number}) {
    const [{ response, loading, error }] = useAxios({
        method: 'GET',
        url: STATE_CODES_URL,
    })
    const [currentState, setCurrentSate] = useState<string>(String(selectedSate));
    //const [currentState, setCurrentSate] = useState<string>(String(navs.stateCode));
    const [stateData, setStateData] = useState<StateData[]>([]);

    const handleSelect = (event: SelectChangeEvent) => {
        console.log("event is")
        console.log(event)

        setCurrentSate(event.target.value)
        //selectedSate = Number(event.target.value)
        
    }
    const createStateMenuItems = () => {
        return stateData.map((state, index) => <MenuItem key={index} value={state.stateCode}>{state.stateName}</MenuItem>)
    };

    useEffect(() => {
        if (!loading && !error) {
            const stateCodes = response?.data.slice(1);
            //console.log(stateCodes);
            const formattedStates = stateCodes.map((stateArr: any[]) => {
                return {
                    "stateName": stateArr[0],
                    "stateCode": Number(stateArr[1])
                }
            })
            setStateData(formattedStates);
        }
    }, [response, loading, error]);

    return (
        <Box sx={{ maxWidth: 300 }} m={2} pt={3}>
            <FormControl fullWidth >
                <InputLabel id="demo-simple-select-label">State</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={currentState}
                    label="State"
                    onChange={handleSelect}
                >
                    {createStateMenuItems()}
                </Select>
            </FormControl>
        </Box>
    );

};