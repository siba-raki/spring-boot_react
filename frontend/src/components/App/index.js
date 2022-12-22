import React from 'react';
import './App.css';

import { Filter } from "../Filter";
import { Cards } from "../Cards";
import { Util } from "../Util"
// import { Navbar } from '../Navbar';
import { Aside } from '../Aside';
import { Login } from '../Login';
import { LoginRequired } from '../LoginRequired';
import { CustomTableHoteles } from '../CustomTableHoteles';
import { Hotel } from '../Hotel';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import { HoteleForm } from '../HotelForm';
import { Dashboard } from '../Dashboard';
import { Reservas } from '../Reservas';


function App() {
  const {
    setHoteles,
    getHabitaciones,
    setHabitaciones,
    getReservas,
    reservar,
    postHotel,
    updateHotel,
    deleteHotel,
    hoteles,
    ciudades,
    habitaciones,
    getLogin
} = Util();

  return (
    <React.Fragment>
      {/* <Navbar /> */}
      <Router>
        <Routes>
          <Route path='/' element={
            <LoginRequired >
              <React.Fragment>
                <Filter ciudades={ciudades} hoteles={hoteles} setHoteles={setHoteles}/>
                <Cards hoteles={hoteles}/>
              </React.Fragment>
            </LoginRequired>
          } />
          <Route path='reservas' element={<Reservas getReservas={getReservas}/>} />
          <Route path='login' element={<Login getLogin={getLogin}/>} />
          <Route path='hotel/:id' element={
            <div className="flex  mb-4 w-full">
              <Aside habitaciones={habitaciones} setHabitaciones={setHabitaciones} getHabitaciones={getHabitaciones}/>
              <Hotel getHabitaciones={getHabitaciones} habitaciones={habitaciones} reservar={reservar} />
            </div>
          } />
          <Route path='dashboard' element={
            <Dashboard >
              <CustomTableHoteles hoteles={hoteles} deleteHotel={deleteHotel}/>
              <HoteleForm postHotel={postHotel} updateHotel={updateHotel} ciudades={ciudades} hoteles={hoteles}/>
            </Dashboard>
          } />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
