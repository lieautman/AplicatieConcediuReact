import { React, useState } from 'react'
import TextField from '@mui/material/TextField'
import { PropTypes } from 'prop-types'

function SearchBar({ onFilter }) {
  return (
    <TextField
      id='outlined-basic'
      variant='outlined'
      witdh='70%'
      height='5%'
      label='Filtreaza dupa tipul de concediu'
      onChange={onFilter}
    />
  )
}

SearchBar.propTypes = {
  onFilter: PropTypes.func
}

export default SearchBar
