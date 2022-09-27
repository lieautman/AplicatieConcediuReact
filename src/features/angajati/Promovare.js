import { React, useState } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import stilAngajati from './StilAngajati'
import stilButoane from './StilButoane'
import { makeStyles } from '@material-ui/core'
import TabelAngajatiDePromovat from './TabelAngajatiDePromovat'
import IconButton from '@material-ui/core/IconButton'
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft'
import { useHeader } from 'providers/AreasProvider'
import DropDownEchipa from './Autocomplete'
import { useTranslation } from 'react-i18next'
import { useQueryWithErrorHandling } from 'hooks/errorHandling'
import ANGAJATI_DATA_QUERY from './QueryAngajati'
import PropTypes from 'prop-types'

const useStyles = makeStyles(stilAngajati)

export default function Promovare(props) {
  const { dispatch, state } = props
  useQueryWithErrorHandling(ANGAJATI_DATA_QUERY, {
    onCompleted: data => {
      dispatch({ inputName: 'listaAngDeAdaugatDinBaza', inputValue: data.angajatiData })
      dispatch({ inputName: 'textNume', inputValue: data.angajatiData.nume })
      dispatch({ inputName: 'textPrenume', inputValue: data.angajatiData.prenume })
      dispatch({ inputName: 'textEchipa', inputValue: data.angajatiData.echipa })
    }
  })

  const { t } = useTranslation()
  const stilPromovare = useStyles()
  useHeader(
    <div variant='subtitles1' className={stilPromovare.stilTitlu}>
      {t('NavBar.Promovare')}
    </div>
  )

  const stilButon = makeStyles(stilButoane)
  const stilBtn = stilButon()

  const [indexSelectat1, setIdRand1] = useState(null)

  const setareId1 = id => () => {
    if (id !== indexSelectat1) {
      setIdRand1(id)
    } else {
      setIdRand1(null)
    }
  }

  const [indexSelectat2, setIdRand2] = useState(null)
  const setareId2 = id => () => {
    if (id !== indexSelectat2) {
      setIdRand2(id)
    } else {
      setIdRand2(null)
    }
  }

  //functie de actiune pe buton pt adaugare angajati in lista de formare echipa
  function AdaugaElem() {
    if (indexSelectat1 !== null && indexSelectat1 !== undefined && props.state.listaAngajatiDeAdaugat[indexSelectat1]) {
      props.dispatch({ inputName: 'modificareListe', actiune: 'Adaugare', index: indexSelectat1 })
    }
  }

  function ScoateElem() {
    if (indexSelectat2 !== null && indexSelectat2 !== undefined && props.state.listaAngajatiAdaugati[indexSelectat2]) {
      props.dispatch({ inputName: 'modificareListe', actiune: 'Scoatere', index: indexSelectat2 })
    }
  }

  return (
    <div>
      <div className={stilPromovare.divPromovare}>
        <div>
          <Card sx={{ width: 320, height: 140 }}>
            <CardContent>
              <div className={stilPromovare.divPromovare}>
                <div>
                  <Avatar sx={{ bgcolor: '#05241d', width: 100, height: 100 }} aria-label='recipe'>
                    {state.poza}
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
          <DropDownEchipa></DropDownEchipa>
          <button className={stilBtn.buton}>SALVEAZA MODIFICARILE</button>
        </div>
      </div>
      <div className={stilPromovare.divTabelePromovare}>
        <div>
          <TabelAngajatiDePromovat
            rows={state.listaAngajatiDeAdaugat}
            setIdRand={setIdRand1}
            indexSelectat={indexSelectat1}
            setareId={setareId1}
          ></TabelAngajatiDePromovat>
        </div>
        <div className={stilBtn.butoaneListePromovare}>
          <IconButton aria-label='KeyboardArrowRight' onClick={AdaugaElem} style={{ backgroundColor: '#26c6da', color: 'white' }}>
            <KeyboardArrowRight />
          </IconButton>
          <IconButton aria-label='KeyboardArrowLeft' onClick={ScoateElem} style={{ backgroundColor: '#26c6da', color: 'white' }}>
            <KeyboardArrowLeft />
          </IconButton>
        </div>
        <div>
          <TabelAngajatiDePromovat
            rows={state.listaAngajatiAdaugati}
            setIdRand={setIdRand2}
            indexSelectat={indexSelectat2}
            setareId={setareId2}
          ></TabelAngajatiDePromovat>
        </div>
      </div>
    </div>
  )
}

Promovare.propTypes = {
  state: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
}
