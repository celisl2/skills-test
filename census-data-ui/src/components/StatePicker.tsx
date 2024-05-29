import { Box, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from "@mui/material";
import useAxios from "axios-hooks";
import { useEffect, useState } from "react";
import { StateData } from "../models/StateData";

const STATE_CODES_URL = "https://api.census.gov/data/2022/acs/acs5?get=NAME&for=state:*"


export default function StatePicker({selectedSate, onUpdate} : {selectedSate: StateData, onUpdate:React.Dispatch<React.SetStateAction<StateData>>}) {
    const [{ response, loading, error }] = useAxios({
        method: 'GET',
        url: STATE_CODES_URL,
    })
    const [currentState, setCurrentSate] = useState<string>(selectedSate.stateCode);
    const [stateData, setStateData] = useState<StateData[]>([]);

    const handleSelect = (event: SelectChangeEvent) => {
        setCurrentSate(event.target.value)
        onUpdate({stateName: stateData.filter(state => state.stateCode === event.target.value)[0].stateName, stateCode: event.target.value})
    }
    const createStateMenuItems = () => {
        return stateData.map((state, index) => <MenuItem key={index} value={state.stateCode}>{state.stateName}</MenuItem>)
    };

    useEffect(() => {
        if (!loading && !error) {
            const stateCodes = response?.data.slice(1);
            const formattedStates = stateCodes.map((stateArr: any[]) => {
                return {
                    "stateName": stateArr[0],
                    "stateCode": stateArr[1]
                }
            })
            setStateData(formattedStates);
        }
    }, [response, loading, error]);

    return (
        <div className="center">
            <Box sx={{ m: 4, minWidth: 200 }}>
                <FormControl fullWidth>
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
        </div>

    );

};