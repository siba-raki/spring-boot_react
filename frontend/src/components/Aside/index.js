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

function Aside({hoteles, setHoteles}) {
  const [amount, setAmount] = React.useState([20, 300]);

  const handleChangeAmount = (event, newValue) => {
    setAmount(newValue);
  };

  const filtrarAmount = () => {
    let newHoteles = hoteles.filter(hotel => hotel.amount >= amount[0]);
    newHoteles = newHoteles.filter(hotel => hotel.amount <= amount[1]);
    setHoteles(newHoteles)
  }

  const filtrarRating = (e) => {
    console.log()
    setHoteles(hoteles.filter(h => h.rating >= e.target.value))

    // llamar a la api y luego filtrar> o llamar con este filtro
  };
  return(
    <React.Fragment>
      <div className="w-1/3">
        <div className="pt-5">
          <div className="w-full">
            <div className="px-4 pt-4 mx-10 pb-16 border-gray-200 shadow shadow-indigo-500/40">
              <h5>Rango de precio</h5>
              <br />
              <Slider
                  // getAriaLabel={() => 'Temperature range'}
                  value={amount}
                  max={1000}
                  onChange={handleChangeAmount}
                  valueLabelDisplay="auto"
                  getAriaValueText={valuetext}
                  />
              <button type="button" className="mt-2 float-right btn btn-primary" onClick={filtrarAmount}>Filtrar</button>
            </div>
          </div>
        </div>
        <div className="flex justify-end pt-5">
          <div className="w-1/2">
            <div className="px-4 py-4 mr-10 border-gray-200 shadow shadow-indigo-500/40">
              <h5>Buscar por estrellas</h5>
              <StyledButton onClick={filtrarRating} value={1} size="small" >+1 estrellas</StyledButton >
              <StyledButton onClick={filtrarRating} value={2} size="small" >+2 estrellas</StyledButton >
              <StyledButton onClick={filtrarRating} value={3} size="small" >+3 estrellas</StyledButton >
              <StyledButton onClick={filtrarRating} value={4} size="small" >+4 estrellas</StyledButton >
              <StyledButton onClick={filtrarRating} value={5} size="small" >5 estrellas</StyledButton >
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export { Aside }