import { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useAxios from 'axios-hooks';

const TOTAL_POPULATION_CENSUS_VAR = "B01001_001E"
const SPANISH_SPEAKERS_CENSUS_VAR = "B06007_003E"
const BASE_CENSUS_URL = "https://api.census.gov/data/2022/acs/acs5"
const FULL_CENSUS_URL = 
  `${BASE_CENSUS_URL}?get=NAME,${TOTAL_POPULATION_CENSUS_VAR},${SPANISH_SPEAKERS_CENSUS_VAR}&for=county:*&in=state:53`

interface CountyData {
  countyName: string,
  population: number,
  spanishSpeakers: number,
  fipsCode: string
}

export default function CensusDataTable() {

  const [{ response, loading, error }] = useAxios({
    method: 'GET',
    url: FULL_CENSUS_URL,
  })
  const [rows, setRows] = useState<CountyData[]>([]);
  
  useEffect(() => {
    if (!loading && !error)
      {
        console.log(response?.data)
        const censusResponse: string[][] = response?.data.slice(1) //skip header row
        const censusRows = censusResponse.map(row => {
          return {
            "countyName": row[0],
            "population": Number(row[1]),
            "spanishSpeakers": Number(row[2]),
            "fipsCode": row[4]
          }
        })
        setRows(censusRows)
      }
  }, [response]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 400, maxWidth: 1000}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>County Name</TableCell>
            <TableCell align="right">Overall Population</TableCell>
            <TableCell align="right">Spanish Speakers</TableCell>
            <TableCell align="right">County Fips Code</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.countyName}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.countyName}
              </TableCell>
              <TableCell align="right">{row.population}</TableCell>
              <TableCell align="right">{row.spanishSpeakers}</TableCell>
              <TableCell align="right">{row.fipsCode}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}