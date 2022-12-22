import { useParams } from 'react-router-dom'
import React, { useEffect} from 'react';

import Snack  from "../Snack" 
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

function Hotel({ getHabitaciones, habitaciones, reservar }) {
  const { id } = useParams();
  const [fechas, setFechas] = React.useState({desde: null, hasta: null});
  const [snack, setSnack] = React.useState(false);

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFechas(prevState => ({
        ...prevState,
        [name]: value
    }));
  };

  const agendar = ( idHabitacion ) => {
    const now = new Date();
    const data = {
      hotel: id,
      usuario: localStorage.getItem('userId'),
      habitacion: idHabitacion,
      reservaDesde: fechas.desde,
      reservaHasta: fechas.hasta,
      estado: "Reservado"
    }
    if ( data.reservaDesde > data.reservaHasta ) {
      setSnack("Fecha invalida para reservar");
      return
    }
    if ( data.reservaHasta <  now.toISOString().split('T')[0]) {
      setSnack("La fecha 'hasta' es menor a la fecha actual");
      return
    }
    const reservado = reservar(data)
    setSnack(
      reservado ? "Se creo la reserva": "Error al crear la reserva"
    )
  }


  useEffect(() => {
    if (habitaciones.length === 0 ){
      getHabitaciones(id)
    }
  // eslint-disable-next-line
  }, [])

  const NoHabitacion = () => {
    return (
          <Typography variant="h4" gutterBottom>
            No hay habitaciones disponibles :(
          </Typography>
    )
  }
  
  return(
    <React.Fragment>
      <Snack msg={snack} setMsg={setSnack}/>  
      <div className='grid grid-cols-3 gap-4 max-w-full'>
      { habitaciones.length > 0 && Object.entries(habitaciones).map(([index, habitacion]) => {
        return(
            <div className="font-sans border-solid border-2 rounded shadow shadow-indigo-500/40 my-5 w-full">
              <div className="flex-auto p-6">
                <div className="flex flex-wrap">
                  <Grid  rid container alignItems="center">
                    <Grid item xs>
                      <Typography gutterBottom variant="h4" component="div">
                        {habitacion.tipoHabitacion} {habitacion.numHabitacion}
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
                <TextField
                    name="desde"
                    label="Desde"
                    InputLabelProps={{ shrink: true, required: true }}
                    type="date"
                    onChange={handleInputChange}
                />
                <div className='inline pl-5'>
                <TextField
                    name="hasta"
                    label="Hasta"
                    InputLabelProps={{ shrink: true, required: true }}
                    type="date"
                    onChange={handleInputChange}
                    />
                </div>
                <div className='pt-4'>
                  <button onClick={() => agendar(habitacion.idHabitacion)} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Reservar
                  </button>
                </div>
              </div>
            </div>
        )
      })}
        </div>    

      {habitaciones.length === 0 && <NoHabitacion />}
    </React.Fragment>
  )
}

export { Hotel }