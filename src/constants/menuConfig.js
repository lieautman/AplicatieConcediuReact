import React from 'react'
import { Dashboard } from '@material-ui/icons'
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import DateRangeIcon from '@material-ui/icons/DateRange';
import {People} from '@material-ui/icons'


const menuItems = [{ icon: <Dashboard />, text: 'NavBar.Dashboard', path: '/dashboard', name: 'Dashboard' },
{  icon: <People />, text: 'Angajati', path: '/angajati', name: 'Angajati' },{  text: 'Adauga_Angajat', path: '/adauga_angajat', name: 'Adauga_Angajat' },
                    {icon: <DateRangeIcon/>, text:'NavBar.ToateConcediile', path: '/toateConcediile', name:'ToateConcediile'},
                    { icon: <NoteAddIcon />, text: 'CreareConcediu', path: '/CreareConcediu', name: 'CreareConcediu'}]

export default menuItems
