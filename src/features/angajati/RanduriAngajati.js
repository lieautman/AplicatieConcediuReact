import * as React from 'react'
import { styled } from '@mui/material/styles'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import PropTypes from 'prop-types'
import Checkbox from '@mui/material/Checkbox'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.success.dark,
    color: theme.palette.common.white
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14
  }
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0
  }
}))
export default function RanduriAngajati(props) {
  const { row, setareId, indexSelectat } = props
  return (
    <StyledTableRow key={row.name}>
      <StyledTableCell align='center'>
        <Checkbox
          color='primary'
          // indeterminate={numSelected > 0 && numSelected < rowCount}

          checked={indexSelectat !== undefined && indexSelectat !== null ? row.id === indexSelectat : false}
          onChange={setareId(row.id)}
          inputProps={{
            'aria-label': 'select all desserts'
          }}
        />
      </StyledTableCell>
      <StyledTableCell component='th' scope='row' align='center'>
        {row.id}
      </StyledTableCell>
      <StyledTableCell component='th' scope='row' align='center'>
        {row.nume}
      </StyledTableCell>

      <StyledTableCell align='center'>{row.prenume}</StyledTableCell>
      <StyledTableCell align='center'>{row.email}</StyledTableCell>
      <StyledTableCell align='center'>{row.manager}</StyledTableCell>
      <StyledTableCell align='center'>{row.echipa}</StyledTableCell>
    </StyledTableRow>
  )
}

RanduriAngajati.propTypes = {
  row: PropTypes.object.isRequired,
  setareId: PropTypes.func,
  indexSelectat: PropTypes.number
}
