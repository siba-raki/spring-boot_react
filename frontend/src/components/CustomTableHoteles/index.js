import React from "react"
import Snack  from "../Snack" 
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function CustomTableHoteles({ hoteles, deleteHotel }) {
  const [snack, setSnack] = React.useState(false);

  const handleClick = (e) => {
    const isDeleted = deleteHotel(e.target.value)
    setSnack(
      isDeleted ? "Se elimino el hotel": "Error al eliminar el hotel"
      )
    }
    
    
    return(
      <React.Fragment>
      <Snack msg={snack} setMsg={setSnack}/>      
    <TableContainer component={Paper}>

      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{width:'5%'}}>Hotel</TableCell>
            <TableCell style={{width:'30%'}}>descripcion</TableCell>
            <TableCell style={{width:'10%'}}>Direccion</TableCell>
            <TableCell style={{width:'5%'}}>Ciudad</TableCell>
            <TableCell style={{width:'5%'}}>telefono</TableCell>
            <TableCell style={{width:'5%'}}>accion</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {hoteles.map((hotel) => (
            <TableRow
              key={hotel.idHotel}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
              <TableCell component="th" scope="row">{hotel.nombreHotel}</TableCell>
              <TableCell>{hotel.descripcion}</TableCell>
              <TableCell>{hotel.direccion}</TableCell>
              <TableCell>{hotel.ciudad}</TableCell>
              <TableCell>{hotel.telefono}</TableCell>
              <TableCell>
                <button aria-label="delete" size="small" onClick={handleClick} value={hotel.idHotel}>
                  eliminar
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </React.Fragment>
  )
}

export { CustomTableHoteles }  