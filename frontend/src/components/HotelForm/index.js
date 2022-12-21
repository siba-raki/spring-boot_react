import React from "react"
import Snack  from "../Snack" 
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function HoteleForm({postHotel, updateHotel, ciudades, hoteles}) {
  const [newHotel, setNewHotel] = React.useState({nombreHotel: "", descripcion: "", direccion: "", ciudad: 0, telefono: ""})
  const [oldHotel, setOldHotel] = React.useState({idHotel: 0, nombreHotel: "", descripcion: "", direccion: "", ciudad: {ciudad: "", id: 0}, telefono: ""})
  const [snack, setSnack] = React.useState(false);

  const updateStateNewHotel = (e) => {
    setNewHotel({
        ...newHotel,
        [e.target.name]:e.target.value,
    });
  }

  const updateStateUpdateHotel = (e) => {
    setOldHotel({
        ...oldHotel,
        [e.target.name]:e.target.value,
    });
  }

  const updateCiudad = (e) => {
    const ciudad = ciudades.filter(ciudad => ciudad.idCiudad === e.target.value)
    setOldHotel({
      ...oldHotel,
      "ciudad":ciudad[0],
    });
    }
  
  const createHotel = (e) => {
    if (e && "preventDefault" in e) e.preventDefault()
    const isCreated = postHotel(newHotel)
    setSnack( isCreated? "Se creo el hotel": "Error al crear el hotel")
  }

  const updateHotelAction = (e) => {
    if (e && "preventDefault" in e) e.preventDefault()
    const isUpdated = updateHotel(oldHotel)
    setSnack( isUpdated? "Se actualizo el hotel": "Error al actualizar el hotel")
  }

  return (
    <React.Fragment>
      <Snack msg={snack} setMsg={setSnack}/>
      <h3 className="pt-2 pl-2">Crear Hotel</h3>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        onSubmit={createHotel}
        noValidate
        autoComplete="off"
      >
        <div className="flex items-center justify-center px-2">
          <TextField
            label="Hotel"
            variant="standard"
            name = "nombreHotel"
            onChange={updateStateNewHotel}
            required
          />
          <TextField
            label="Descripcion"
            variant="standard"
            multiline
            name = "descripcion"
            style = {{width: '50%'}}
            onChange={updateStateNewHotel}
            required
          />
          <TextField
            label="Direccion"
            variant="standard"
            name = "direccion"
            onChange={updateStateNewHotel}
            required
          />
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="slect-label">Ciudad</InputLabel>
            <Select
              labelId="slect-label"
              id="select-standard"
              value={newHotel.ciudad}
              name="ciudad"
              onChange={updateStateNewHotel}
              label="Ciudad"
              defaultValue={''}
            >
              {ciudades.map((ciudad) => {
                return (
                  <MenuItem name="ciudad" value={ciudad.idCiudad}>{ciudad.ciudad}</MenuItem>
                )
              })}
            </Select>
          </FormControl>
          <TextField
            label="Telefono"
            variant="standard"
            name = "telefono"
            onChange={updateStateNewHotel}
            required
          />
          <Button type="submit"  variant="contained" className="mt-3">Añadir</Button>
        </div>
      </Box>
      <h3 className="py-2 pl-2">Actualizar Hotel</h3>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        onSubmit={updateHotelAction}
        noValidate
        autoComplete="off"
      >
        <div className="flex items-center justify-center px-2">
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="slect-label-hotel">Hotel</InputLabel>
            <Select
              labelId="slect-label-hotel"
              id="select-standard"
              value={oldHotel.idHotel}
              name="idHotel"
              onChange={updateStateUpdateHotel}
              label="Hotel"
              defaultValue={''}
            >
              {hoteles.map((hotel) => {
                return (
                  <MenuItem name="idHotel" value={hotel.idHotel}>{hotel.nombreHotel}</MenuItem>
                )
              })}
            </Select>
          </FormControl>
          <TextField
            label="Nombre"
            variant="standard"
            name = "nombreHotel"
            onChange={updateStateUpdateHotel}
            required
          />
          <TextField
            label="Descripcion"
            variant="standard"
            multiline
            name = "descripcion"
            style = {{width: '50%'}}
            onChange={updateStateUpdateHotel}
            required
          />
          <TextField
            label="Direccion"
            variant="standard"
            name = "direccion"
            onChange={updateStateUpdateHotel}
            required
          />
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="slect-label-update">Ciudad</InputLabel>
            <Select
              labelId="slect-label-update"
              id="select-standard-update"
              name="ciudad"
              onChange={updateCiudad}
              label="Ciudad"
              defaultValue={''}
            >
              {ciudades.map((ciudad) => {
                return (
                  <MenuItem name="ciudad" value={ciudad.idCiudad}>{ciudad.ciudad}</MenuItem>
                )
              })}
            </Select>
          </FormControl>
          <TextField
            label="Telefono"
            variant="standard"
            name = "telefono"
            onChange={updateStateUpdateHotel}
            required
          />
          <Button type="submit"  variant="contained" className="mt-3">Actualizar</Button>
        </div>

      </Box>
    </React.Fragment>   
  )
}
export { HoteleForm }