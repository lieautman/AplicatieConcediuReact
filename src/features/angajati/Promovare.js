import * as React from 'react'
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

const useStyles = makeStyles(stilAngajati)

export default function BasicCard() {
  //   const stilAng = makeStyles(stilAngajati)
  //   const stilPromovare = stilAng()
  const stilPromovare = useStyles()
  useHeader(
    <div variant='subtitles1' className={stilPromovare.stilTitlu}>
      {'Promovare angajat'}
    </div>
  )

  const stilButon = makeStyles(stilButoane)
  const stilBtn = stilButon()

  function createData(nume, prenume, echipa) {
    return { nume, prenume, echipa }
  }
  const rows = [
    createData('Popescu', 'Ioana', 'IT'),
    createData('Ionescu', 'Ana', 'Marketing'),
    createData('Vasilescu', 'Mihai', 'Resurse Umane'),
    createData('Enescu', 'Ion', 'Marketing'),
    createData('Georgescu', 'Alina', 'IT')
  ]
  const rows2 = [
    createData('', '', ''),
    createData('', '', ''),
    createData('', '', ''),
    createData('', '', ''),
    createData('', '', ''),
    createData('', '', ''),
    createData('', '', '')
  ]
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
                    Nume si prenume
                  </Typography>
                  <Typography variant='h5' component='div'></Typography>
                  <Typography sx={{ fontSize: 16 }} color='text.secondary'>
                    Functie
                  </Typography>
                  <Typography sx={{ fontSize: 14 }} color='text.secondary'>
                    Echipa
                  </Typography>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className={stilPromovare.divSelect}>
          <InputLabel id='demo-simple-select-autowidth-label'>Alege echipa</InputLabel>
          <Select
            labelId='demo-simple-select-autowidth-label'
            id='demo-simple-select-autowidth'
            label='Alege echipa'
            autoWidth
            defaultValue={10}
          >
            <MenuItem value={10}>Marketing</MenuItem>
            <MenuItem value={20}>Resurse Umane</MenuItem>
            <MenuItem value={30}>IT Suport</MenuItem>
            <MenuItem value={40}>Dezvoltare</MenuItem>
            <MenuItem value={50}>Servicii financiare</MenuItem>
          </Select>
          <button className={stilBtn.buton}>SALVEAZA MODIFICARILE</button>
        </div>
      </div>
      <div className={stilPromovare.divTabelePromovare}>
        <div>
          <TabelAngajatiDePromovat rows={rows}></TabelAngajatiDePromovat>
        </div>
        <div className={stilBtn.butoaneListePromovare}>
          <IconButton aria-label='KeyboardArrowRight' style={{ backgroundColor: '#26c6da', color: 'white' }}>
            <KeyboardArrowRight />
          </IconButton>
          <IconButton aria-label='KeyboardArrowLeft' style={{ backgroundColor: '#26c6da', color: 'white' }}>
            <KeyboardArrowLeft />
          </IconButton>
        </div>
        <div>
          <TabelAngajatiDePromovat rows={rows2}></TabelAngajatiDePromovat>
        </div>
      </div>
    </div>
  )
}
