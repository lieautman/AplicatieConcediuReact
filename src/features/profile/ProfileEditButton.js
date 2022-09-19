import React from 'react'
import Edit from '@material-ui/icons/Edit'
import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types'

import { Link } from "react-router-dom";

function ProfileEditButton(props) {
  return (
    <Button> <Link to={"/profileEdit"}> <Edit className = {props.idDat}/></Link></Button>
  )
}
ProfileEditButton.propTypes = {
  idDat: PropTypes.string.isRequired
}
export default ProfileEditButton