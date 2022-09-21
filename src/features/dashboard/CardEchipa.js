import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import PropTypes from 'prop-types'
import Grid from '@mui/material/Grid'
import { Link } from 'react-router-dom'

export default function CardEchipa(props) {
  const { echipa } = props

  return (
    <Grid item xs={4}>
      <Card sx={{ maxWidth: 310 }}>
        <CardMedia component='img' height='250' image={echipa.poza} alt='poza echipei' />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {echipa.nume}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {echipa.descriere}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={'/angajati_echipe'}>
            <Button variant='contained' style={{ backgroundColor: '#26c6da' }}>
              Vizualizeaza echipa
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  )
}

CardEchipa.propTypes = {
  echipa: PropTypes.object.isRequired
}
