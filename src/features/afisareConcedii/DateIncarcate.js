import * as React from 'react';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import PropTypes from 'prop-types'

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.success.dark,
      color: theme.palette.common.white,
      fontSize: 16,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
export default function DateIncarcate({row}){
    return (
        <StyledTableRow key={row.name} >
        <StyledTableCell component="th" scope="row" align="center">
          {row.name}
        </StyledTableCell>
        <StyledTableCell align="center">{row.dataInceput}</StyledTableCell>
        <StyledTableCell align="center">{row.dataSfarsit}</StyledTableCell>
        <StyledTableCell align="center">{row.inlocuitor}</StyledTableCell>
        <StyledTableCell align="center">{row.motiv}</StyledTableCell>
        <StyledTableCell align="center">{row.angajat}</StyledTableCell>
        <StyledTableCell align="center">{row.stareConcediu}</StyledTableCell>
      </StyledTableRow>
    )
}

DateIncarcate.propTypes = {
    row: PropTypes.object.isRequired
  }
