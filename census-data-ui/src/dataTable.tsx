import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  countyName: string,
  population: number,
  spanishSpekers: number,
  fipsCode: string
) {
  return { countyName, population, spanishSpekers, fipsCode };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, "a"),
  createData('Ice cream sandwich', 237, 9.0, "b"),
  createData('Eclair', 262, 16.0, "c"),
];

export default function DataTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
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
              <TableCell align="right">{row.spanishSpekers}</TableCell>
              <TableCell align="right">{row.fipsCode}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}