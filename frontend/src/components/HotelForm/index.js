import React from "react"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function HoteleForm() {
  const [newHotel, setNewHotel] = React.useState({titulo: "", descripcion: "", rating: 0, monto: 0})
  
  const updateState = (e) => {
    setNewHotel({
        [e.target.name]:e.target.value,
    });
  }

  const submitHandler = (e) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', "Access-Control-Allow-Origin": '*'},
        body: JSON.stringify(newHotel)
    };
    fetch('/api/login', requestOptions)
    .then( res => {
        if (res.ok){
          // get all?
        }
        throw res
    }).catch(error => {
      alert("Ocurrio un error al enviar los datos")
    })
  }
  return (
    <React.Fragment>
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