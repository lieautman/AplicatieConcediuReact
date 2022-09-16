import React from 'react'
import { Dashboard } from '@material-ui/icons'
import {People} from '@material-ui/icons'
import {PersonAdd} from '@material-ui/icons'

const menuItems = [{ icon: <Dashboard />, text: 'NavBar.Dashboard', path: '/dashboard', name: 'Dashboard' },
{  icon: <People />, text: 'Angajati', path: '/angajati', name: 'Angajati' },{icon: <PersonAdd />,  text: 'NavBar.Adauga_Angajat', path: '/adauga_angajat', name: 'Adauga_Angajat' }]

export default menuItems

