import { useParams } from 'react-router-dom'
import React, { useEffect, useState} from 'react';
import axios from 'axios';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

function Hotel() {
  const { id } = useParams();
  const [habitaciones, setHabitaciones] = useState([]);
  const [fechas, setFechas] = React.useState({desde: null, hasta: null});

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFechas(prevState => ({
        ...prevState,
        [name]: value
    }));
};


  useEffect(() => {
    console.log(habitaciones.length)
    if (habitaciones.length === 0 ){
      setHabitaciones([
        {
          id:1,
          cantCamas: 1,
          cantHuespedes: 2,
          precio: 20,
          tipo_habitacion: "habitacion 1"
        },
        {
          id:2,
          cantCamas: 2,
          cantHuespedes: 2,
          precio: 50,
          tipo_habitacion: "habitacion 2"
        },
        {
          id:3,
          cantCamas: 1,
          cantHuespedes: 1,
          precio: 15,
          tipo_habitacion: "habitacion 3"
        },
        {
          id:4,
          cantCamas: 2,
          cantHuespedes: 4,
          precio: 80,
          tipo_habitacion: "habitacion 4"
        },
      ])
      // axios.get(`http://localhost:8080/hoteles?id=${id}`)
      //   .then(response => {
      //     if (response.status === 200){
      //       setHabitaciones(response.data)
      //     }
      //   })
    }
  }, [])

  return(
    <React.Fragment>
      { habitaciones.length > 0 && Object.entries(habitaciones).map(([index, habitacion]) => {
        return(
          <div className="max-w-4xl mx-auto">
            <div className="flex font-sans border-solid border-2 rounded shadow shadow-indigo-500/40 my-5">
              <div className="flex-auto p-6">
                <div className="flex flex-wrap">
                  <Grid  rid container alignItems="center">
                    <Grid item xs>
                      <Typography gutterBottom variant="h4" component="div">
                        {habitacion.tipo_habitacion}
                      </Typography>
                      <p color="text.secondary" variant="body2">
                        Huespedes: {habitacion.cantHuespedes}, Camas: {habitacion.cantCamas}
                      </p>
                    </Grid>
                    <Grid item>
                      <Typography gutterBottom variant="h6" component="div">
                        ${habitacion.precio}
                      </Typography>
                    </Grid>
                  </Grid>
                </div>
                <div className='pt-5'>
                <TextField
                    name="desde"
                    label="Desde"
                    InputLabelProps={{ shrink: true, required: true }}
                    type="date"
                    variant="standard"
                    onChange={handleInputChange}
                />
                <div className='inline pl-5'>
                <TextField
                    name="hasta"
                    label="Hasta"
                    InputLabelProps={{ shrink: true, required: true }}
                    type="date"
                    variant="standard"
                    onChange={handleInputChange}
                    />
                    </div>

                </div>
                <div className='pt-4'>
                  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Agendar
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </React.Fragment>
  )
}

export { Hotel }