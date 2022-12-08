import { useParams } from 'react-router-dom'
import React, { useEffect, useState} from 'react';
import axios from 'axios';

import Rating from '@mui/material/Rating';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
function Hotel() {
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);
  const [value, setValue] = React.useState(dayjs('2022-12-01'));

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (hotel === null ){
      setHotel({
        id:2,
        titulo:"ibis Asuncion",
        descripcion:"El ibis Asuncion se encuentra en Asunción, a 3,5 km del zoológico y del jardín botánico y a 5 km del centro de información de las Naciones Unidas,",
        src: "",
        rating: 3.5,
        amount: 70,
        nroHabitaciones: 1,
        ciudad: "ciudad del este"
      })
      // axios.get(`http://localhost:8080/hoteles?id=${id}`)
      //   .then(response => {
      //     if (response.status === 200){
      //       setHotel(response.data)
      //     }
      //   })
    }
  }, [])

  return(
    <React.Fragment>
      {hotel && 
      <React.Fragment>
      <div className="max-w-4xl mx-auto">
        <div className="flex font-sans border-solid border-2 rounded shadow shadow-indigo-500/40 my-5">
        <div className="flex-none w-50 relative">
          <img src={hotel.src} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="flex-auto p-6">
          <div className="flex flex-wrap">
          <Grid container alignItems="center">
              <Grid item xs>
                <Typography gutterBottom variant="h4" component="div">
                  {hotel.titulo}
                </Typography>
                <p color="text.secondary" variant="body2">
                  {hotel.ciudad}, habitaciones: {hotel.nroHabitaciones}
                </p>
              </Grid>
              <Grid item>
                <div className="text-lg font-semibold text-slate-500">
                  <Rating name="read-only" value={hotel.rating} readOnly precision={0.5}/>
                </div>
                <Typography gutterBottom variant="h6" component="div">
                  ${hotel.amount}
                </Typography>
              </Grid>
            </Grid>
              <Typography color="text.secondary" variant="body2">
                {hotel.descripcion}
             </Typography>
            </div>
            <div className='pt-5'>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Stack direction="row" spacing={2}>
                  <DesktopDatePicker
                    label="Desde"
                    inputFormat="DD/MM/YYYY"
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                    />
                  <DesktopDatePicker
                  label="Hasta"
                  inputFormat="DD/MM/YYYY"
                  value={value}
                  onChange={handleChange}
                  renderInput={(params) => <TextField {...params} />}
                  />
                </Stack>
              </LocalizationProvider>
            </div>
              <div className='pt-4'>
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Agendar
                </button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
      }
    </React.Fragment>
  )
}

export { Hotel }