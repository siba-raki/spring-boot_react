import React from "react"
import Snack  from "../Snack" 
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function HoteleForm({postHotel}) {
  const [newHotel, setNewHotel] = React.useState({titulo: "", descripcion: "", rating: 0, amount: 0})
  const [snack, setSnack] = React.useState(false);
  
  const updateState = (e) => {
    setNewHotel({
        ...newHotel,
        [e.target.name]:e.target.value,
    });
  }

  const submitHandler = (e) => {
    if (e && "preventDefault" in e) e.preventDefault()
    const isCreated = postHotel(newHotel)
    setSnack( isCreated? "Se creo el hotel": "Error al crear el hotel")
  }

  return (
    <React.Fragment>
    <Snack msg={snack} setMsg={setSnack}/>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      onSubmit={submitHandler}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          label="Titulo"
          variant="standard"
          style = {{width: 300}}
          name = "titulo"
          onChange={updateState}
          required
        />
        <TextField
          label="Descripcion"
          variant="standard"
          style = {{width: 1200}}
          name = "descripcion"
          onChange={updateState}
          required
        />
        <TextField
          label="calificacion"
          variant="standard"
          type="number"
          style = {{width: 100}}
          name = "rating"
          onChange={updateState}
          required
        />
        <TextField
          label="monto"
          type="number"
          variant="standard"
          style = {{width: 100}}
          name = "amount"
          onChange={updateState}
          required
        />
            <Button type="submit"  variant="contained" className="mt-3">Añadir</Button>
      </div>
    </Box>

    </React.Fragment>   
  )
}
export { HoteleForm }