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


function App() {
  const {
    setHoteles,
    getHabitaciones,
    reservar,
    postHotel,
    updateHotel,
    deleteHotel,
    hoteles,
    ciudades,
    habitaciones
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
                <div className="flex mb-4">
                  <Aside hoteles={hoteles} setHoteles={setHoteles}/>
                  <Cards hoteles={hoteles}/>
                </div>
              </React.Fragment>
            </LoginRequired>
          } />
          <Route path='login' element={<Login />} />
          <Route path='hotel/:id' element={<Hotel getHabitaciones={getHabitaciones} habitaciones={habitaciones} reservar={reservar} />} />
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
