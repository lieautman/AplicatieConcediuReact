import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import RanduriAngajati from './RanduriAngajati';
import TableBody from '@mui/material/TableBody';

import PropTypes from 'prop-types'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.success.dark,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

export default function TabelAngajati({rows}){
    return(
<TableContainer component={Paper}>
<Table sx={{ minWidth: 700 }} aria-label="customized table">
  <TableHead>
    <TableRow>
      <StyledTableCell align="center">Nume</StyledTableCell>
      <StyledTableCell align="center">Prenume</StyledTableCell>
      <StyledTableCell align="center">Email</StyledTableCell>
      <StyledTableCell align="center">Manager</StyledTableCell>
      <StyledTableCell align="center">Echipa</StyledTableCell>
    </TableRow>

  </TableHead>
  <TableBody>
        {rows.map((row,i) => (   
        <RanduriAngajati row={row} key={i}></RanduriAngajati>    
         ))}
        </TableBody>

</Table>
</TableContainer>
    )
}
TabelAngajati.propTypes={
    
     rows: PropTypes.array.isRequired
}
