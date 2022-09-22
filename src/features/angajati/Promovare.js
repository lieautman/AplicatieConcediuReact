import { React, useState } from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import stilAngajati from './StilAngajati'
import stilButoane from './StilButoane'
import { makeStyles } from '@material-ui/core'
import InputLabel from '@mui/material/InputLabel'
import TabelAngajatiDePromovat from './TabelAngajatiDePromovat'
import IconButton from '@mui/material/IconButton'
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft'
import { useHeader } from 'providers/AreasProvider'
import headerStyle from 'assets/jss/components/headerStyle'
import PropTypes from 'prop-types'
import { useReducer } from 'react'
import { initialState, reducer } from './PromovareStateDefine'
import { Autocomplete } from '@material-ui/lab'
import { TextField } from '@material-ui/core'
import { create } from 'lodash'

const useStyles = makeStyles(stilAngajati)

export default function BasicCard() {
  //   const stilAng = makeStyles(stilAngajati)
  //   const stilPromovare = stilAng()
  const [state, dispatch] = useReducer(reducer, initialState)

  const stilPromovare = useStyles()
  useHeader(
    <div variant='subtitles1' className={stilPromovare.stilTitlu}>
      {'Promovare angajat'}
    </div>
  )

  const handleChange = (propertyName, value) => {
    dispatch({ inputName: 'OnPropertyChanged', propertyName, value })
  }
  const ListaEchipe = ['IT', 'Resurse Umane', 'Support', 'Markeing', 'Dezvoltare']

  const stilButon = makeStyles(stilButoane)
  const stilBtn = stilButon()

  function createData(nume, prenume, echipa) {
    return { nume, prenume, echipa }
  }

  function AdaugaElem() {
    let listaAngajatiDeAdaugat = state?.listaAngajatiDeAdaugat
    let listaAngajatiAdaugati = state?.listaAngajatiAdaugati
    let angataDeAdaugat = {
      nume: listaAngajatiDeAdaugat[0]?.nume,
      prenume: listaAngajatiDeAdaugat[0]?.prenume,
      echipa: listaAngajatiDeAdaugat[0]?.echipa
    }

    listaAngajatiAdaugati = [...listaAngajatiAdaugati, angataDeAdaugat]
    console.log(listaAngajatiAdaugati)

    dispatch({ inputName: 'listaAngajatiAdaugati', inputValue: listaAngajatiAdaugati })
    dispatch({ inputName: 'listaAngajatiDeAdaugat', inputValue: listaAngajatiDeAdaugat })
  }

  // const arrayElemets = [{ id: 1, name: 'test' }]

  // const arrayElemets1 = [...arrayElemets, { id: 2, name: 'test1' }]

  // let a=''
  // let i=0
  // while i<listaAngajatiDeAdaugat.size//length{
  // a=a+createData(state.listaAngajatiDeAdaugat[i].nume)
  //i++
  //}
  function ReturnList1() {
    let listBuffer = []
    if (state && state.listaAngajatiDeAdaugat) {
      for (var i = 0; i < state.listaAngajatiDeAdaugat.length; i++) {
        listBuffer = [
          ...listBuffer,
          createData(state.listaAngajatiDeAdaugat[i].nume, state.listaAngajatiDeAdaugat[i].prenume, state.listaAngajatiDeAdaugat[i].echipa)
        ]
      }
    }
    return listBuffer
  }

  let rowsDinStare = ReturnList1()

  function ReturnList2() {
    let listBuffer = []
    if (state && state.listaAngajatiAdaugati) {
      for (var i = 0; i < state.listaAngajatiAdaugati.length; i++) {
        listBuffer = [
          ...listBuffer,
          createData(state.listaAngajatiAdaugati[i].nume, state.listaAngajatiAdaugati[i].prenume, state.listaAngajatiAdaugati[i].echipa)
        ]
      }
    }
    return listBuffer
  }

  let rowsDinStare2 = ReturnList2()
  return (
    <div>
      <div className={stilPromovare.divPromovare}>
        <div>
          <Card sx={{ width: 320, height: 140 }}>
            <CardContent>
              <div className={stilPromovare.divPromovare}>
                <div>
                  <Avatar sx={{ bgcolor: '#05241d', width: 100, height: 100 }} aria-label='recipe'>
                    Poza
                  </Avatar>
                </div>
                <div className={stilPromovare.textManager}>
                  <Typography sx={{ fontSize: 18 }} color='text.secondary' gutterBottom>
                    {state.textNume}
                  </Typography>
                  <Typography sx={{ fontSize: 18 }} color='text.secondary' gutterBottom>
                    {state.textPrenume}
                  </Typography>
                  <Typography variant='h5' component='div'></Typography>
                  <Typography sx={{ fontSize: 14 }} color='text.secondary'>
                    {state.textEchipa}
                  </Typography>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className={stilPromovare.divSelect}>
          <InputLabel id='demo-simple-select-autowidth-label'>Alege echipa</InputLabel>
          <Autocomplete
            id='combo-box-echipe'
            options={ListaEchipe}
            className={stilPromovare.Combobox}
            onChange={event => handleChange('Echipa', event.target.value)}
            // getOptionLabel={option => option.title}

            renderInput={params => <TextField {...params} label='Echipa' variant='outlined' />}
          />
          <button className={stilBtn.buton}>SALVEAZA MODIFICARILE</button>
        </div>
      </div>
      <div className={stilPromovare.divTabelePromovare}>
        <div>
          <TabelAngajatiDePromovat rows={rowsDinStare}></TabelAngajatiDePromovat>
        </div>
        <div className={stilBtn.butoaneListePromovare}>
          <IconButton aria-label='KeyboardArrowRight' onClick={AdaugaElem} style={{ backgroundColor: '#26c6da', color: 'white' }}>
            <KeyboardArrowRight />
          </IconButton>
          <IconButton aria-label='KeyboardArrowLeft' style={{ backgroundColor: '#26c6da', color: 'white' }}>
            <KeyboardArrowLeft />
          </IconButton>
        </div>
        <div>
          <TabelAngajatiDePromovat rows={rowsDinStare2}></TabelAngajatiDePromovat>
        </div>
      </div>
    </div>
  )
}
