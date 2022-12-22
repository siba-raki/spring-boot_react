import React from "react"
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { common} from "@mui/material/colors";
function valuetext(value) {
  return `${value}$`;
}

const StyledButton = styled(Button)(({ theme }) => ({
  textTransform: 'none',
  fontSize: 14,
  color: common['black'],
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
}));

function Aside({habitaciones, setHabitaciones, getHabitaciones}) {
  const [amount, setAmount] = React.useState([40000, 100000]);

  const handleChangeAmount = (event, newValue) => {
    setAmount(newValue);
  };

  const filtrarAmount = async () => {
    let newHabitaciones = habitaciones.filter(habitacion => habitacion.precio >= amount[0]);
    newHabitaciones = newHabitaciones.filter(habitacion => habitacion.precio <= amount[1]);
    setHabitaciones(newHabitaciones)
  }

  return(
    <React.Fragment>
      <div className="w-1/3">
        <div className="pt-5">
          <div className="w-full">
            <div className="px-4 pt-4 mx-10 pb-16 border-gray-200 shadow shadow-indigo-500/40">
              <h5>Rango de precio</h5>
              <br />
              <Slider
                  value={amount}
                  max={300000}
                  onChange={handleChangeAmount}
                  valueLabelDisplay="auto"
                  getAriaValueText={valuetext}
                  />
              <button type="button" className="mt-2 float-right btn btn-primary" onClick={filtrarAmount}>Filtrar</button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export { Aside }