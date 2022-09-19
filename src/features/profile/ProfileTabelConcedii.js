import React from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import PropTypes from 'prop-types'



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
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
const rows = [{
    "id":'1',
    "name":'Concediu medical',
   "dataInceput": '10/16/2022', 
   "dataSfarsit": '10/17/2022', 
   "inlocuitor": 'Andrei Ionescu', 
   "motiv": '', 
   "angajat": 'Ion Popescu', 
   "stareConcediu" : 'Aprobat'
  },{
    "id":'2',
    "name":'Concediu de odihna',
   "dataInceput": '9/1/2022', 
   "dataSfarsit": '9/29/2022', 
   "inlocuitor": 'Maria Iancu', 
   "motiv": '', 
   "angajat": 'Ion Popescu', 
   "stareConcediu" : 'Trimis'
  },{
    "id":'3',
    "name":'Concediu de odihna',
   "dataInceput": '8/28/2022', 
   "dataSfarsit": '8/30/2022', 
   "inlocuitor": 'Andreea Bogdan', 
   "motiv": '', 
   "angajat": 'Ion Popescu', 
   "stareConcediu" : 'Respins'
  },{
    "id":'4',
    "name":'Concediu de odihna',
   "dataInceput": '8/28/2022', 
   "dataSfarsit": '8/30/2022', 
   "inlocuitor": 'Andreea Bogdan', 
   "motiv": '', 
   "angajat": 'Ion Popescu', 
   "stareConcediu" : 'Respins'
  },{
    "id":'5',
    "name":'Concediu de odihna',
   "dataInceput": '8/28/2022', 
   "dataSfarsit": '8/30/2022', 
   "inlocuitor": 'Andreea Bogdan', 
   "motiv": '', 
   "angajat": 'Ion Popescu', 
   "stareConcediu" : 'Respins'
  }];
  
function ProfileTabelConcedii(props) {
  return (
    <TableContainer className={props.idDat} component={Paper} >
      <Table aria-label="customized table">
        <TableHead >
          <TableRow>
            <StyledTableCell align="center" style={{fontWeight: 'bold'}}>Tipul Concediului</StyledTableCell>
            <StyledTableCell align="center" style={{fontWeight: 'bold'}}>Data de inceput</StyledTableCell>
            <StyledTableCell align="center" style={{fontWeight: 'bold'}}>Data de sfarsit</StyledTableCell>
            <StyledTableCell align="center" style={{fontWeight: 'bold'}}>Inlocuitor</StyledTableCell>
            <StyledTableCell align="center" style={{fontWeight: 'bold'}}>Motiv</StyledTableCell>
            <StyledTableCell align="center" style={{fontWeight: 'bold'}}>Angajat</StyledTableCell>
            <StyledTableCell align="center" style={{fontWeight: 'bold'}}>Starea concediului</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.id} >
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
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
ProfileTabelConcedii.propTypes = {
    idDat: PropTypes.string.isRequired,
  }
export default ProfileTabelConcedii