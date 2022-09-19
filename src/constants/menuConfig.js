import React from 'react'
import { Dashboard } from '@material-ui/icons'

import DateRangeIcon from '@material-ui/icons/DateRange';
import {People} from '@material-ui/icons'
import {PersonAdd} from '@material-ui/icons'



const menuItems = [{ icon: <Dashboard />, text: 'NavBar.Dashboard', path: '/dashboard', name: 'Dashboard' },
{  icon: <People />, text: 'NavBar.Angajati', path: '/angajati', name: 'Angajati' },{icon: <PersonAdd />,  text: 'NavBar.Adauga_Angajat', path: '/adauga_angajat', name: 'Adauga_Angajat' },
                    {icon: <DateRangeIcon/>, text:'NavBar.ToateConcediile', path: '/toateConcediile', name:'ToateConcediile'},]
export default menuItems

