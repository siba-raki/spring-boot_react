import React from "react"
import Snack  from "../Snack" 
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function HoteleForm({postHotel, ciudades}) {
  const [newHotel, setNewHotel] = React.useState({titulo: "", descripcion: "", direccion: "", ciudad: 0, telefono: ""})
  const [snack, setSnack] = React.useState(false);

  const updateState = (e) => {
    console.log(e.target.name)
    console.log(e.target.value)
    setNewHotel({
        ...newHotel,
        [e.target.name]:e.target.value,
    });
  }

  const submitHandler = (e) => {
    if (e && "preventDefault" in e) e.preventDefault()
    console.log(newHotel)
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
      <div className="flex items-center justify-center px-2">
        <TextField
          label="Hotel"
          variant="standard"
          name = "nombreHotel"
          onChange={updateState}
          required
        />
        <TextField
          label="Descripcion"
          variant="standard"
          multiline
          name = "descripcion"
          style = {{width: '50%'}}
          onChange={updateState}
          required
        />
        <TextField
          label="Direccion"
          variant="standard"
          name = "direccion"
          onChange={updateState}
          required
        />
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-standard-label">Ciudad</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={newHotel.ciudad}
            name={"ciudad"}
            onChange={updateState}
            label="Ciudad"
            defaultValue={0}
          >
            {ciudades.map((ciudad) => {
              return (
                <MenuItem name={"ciudad"} value={ciudad.idCiudad}>{ciudad.ciudad}</MenuItem>
              )
            })}
          </Select>
        </FormControl>
        <TextField
          label="Telefono"
          variant="standard"
          name = "telefono"
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