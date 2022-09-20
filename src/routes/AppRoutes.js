/* eslint-disable react/jsx-no-bind */
import React from 'react'
import { Switch, Redirect } from 'react-router-dom'
import CustomRoute from '../components/routing/CustomRoute'
import { Forbidden, NotFound } from '@bit/totalsoft_oss.react-mui.kit.core'
import Dashboard from 'features/dashboard/Dashboard'

import ProfileState from 'features/profile/ProfileState'
import ProfileEditState from 'features/profile/ProfileEditState'

import CreareConcediu from 'features/creareConcediu/CreareConcediu'
import ToateConcediile from 'features/afisareConcedii/ToateConcediile'
import Angajati from 'features/angajati/Angajati'
import Adauga_Angajat from 'features/dashboard/adauga_angajat/Adauga_Angajat'
import AngajatiEchipe from 'features/angajati_echipe/AngajatiEchipe'

export default function AppRoutes() {
  return (
    <Switch>
      <CustomRoute isPrivate={false} exact path='/dashboard' component={Dashboard} />
      <Redirect exact from='/' to='/dashboard' />

      <CustomRoute isPrivate={false} exact path='/profile' component={ProfileState} />
      <Redirect exact from='/' to='/profile' />

      <CustomRoute isPrivate={false} exact path='/profileEdit' component={ProfileEditState} />
      <Redirect exact from='/' to='/profileEdit' />

      <CustomRoute isPrivate={false} exact path='/angajati' component={Angajati} />
      <Redirect exact from='/' to='/angajati' />

      <CustomRoute isPrivate={false} exact path='/adauga_angajat' component={Adauga_Angajat} />
      <Redirect exact from='/' to='/adauga_angajat' />

      <CustomRoute isPrivate={false} exact path='/angajati_echipe' component={AngajatiEchipe} />
      <CustomRoute isPrivate={false} exact path='/toateConcediile' component={ToateConcediile} />
      <CustomRoute isPrivate={false} exact path='/CreareConcediu' component={CreareConcediu} />

      <CustomRoute isPrivate={false} exact path='/forbidden' component={Forbidden} />
      <CustomRoute isPrivate={false} render={() => <NotFound title='PageNotFound'></NotFound>} />
    </Switch>
  )
}
