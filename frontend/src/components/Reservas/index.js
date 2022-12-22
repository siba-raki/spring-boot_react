import React from 'react';
import Snack  from "../Snack" 
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

function Reservas({reservas}){
  const [snack, setSnack] = React.useState(false);

  const NoReserva = () => {
    return (
          <Typography variant="h4" gutterBottom>
            No hay reservas agendadas :(
          </Typography>
    )
  }
  return (
    <React.Fragment>
    <Snack msg={snack} setMsg={setSnack}/>  
    <div className='grid grid-cols-3 gap-4 max-w-full'>
    { reservas.length > 0 && Object.entries(reservas).map(([index, reserva]) => {
      return(
          <div className="font-sans border-solid border-2 rounded shadow shadow-indigo-500/40 my-5 w-full">
            <div className="flex-auto p-6">
              <div className="flex flex-wrap">
                <Grid  rid container alignItems="center">
                  <Grid item xs>
                    <Typography gutterBottom variant="h4" component="div">
                      {/* {habitacion.tipoHabitacion} {habitacion.numHabitacion} */}
                    </Typography>
                    <p color="text.secondary" variant="body2">
                      {/* Huespedes: {habitacion.cantHuespedes}, Camas: {habitacion.cantCamas} */}
                    </p>
                  </Grid>
                  <Grid item>
                    <Typography gutterBottom variant="h6" component="div">
                      {/* ${habitacion.precio} */}
                    </Typography>
                  </Grid>
                </Grid>
              </div>
              <TextField
                  name="desde"
                  label="Desde"
                  InputLabelProps={{ shrink: true, required: true }}
                  type="date"
              />
              <div className='inline pl-5'>
              <TextField
                  name="hasta"
                  label="Hasta"
                  InputLabelProps={{ shrink: true, required: true }}
                  type="date"
                  />
              </div>
              <div className='pt-4'>
                {/* <button onClick={() => agendar(habitacion.idHabitacion)} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> */}
                  {/* Reservar */}
                {/* </button> */}
              </div>
            </div>
          </div>
      )
    })}
    </div>    

    {reservas.length === 0 && <NoReserva />}
  </React.Fragment>
  )
}

export { Reservas }