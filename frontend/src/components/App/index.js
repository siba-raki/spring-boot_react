import React from 'react';
import './App.css';

import { Filter } from "../Filter";
import { Cards } from "../Cards";
import { Util } from "../Util"
// import { Navbar } from '../Navbar';
import { Aside } from '../Aside';
import { Login } from '../Login';
import { LoginRequired } from '../LoginRequired';
import { Table } from '../Table';
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
    getHoteles,
    setHoteles,
    ciudades,
    hoteles,
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
          <Route path='hotel/:id' element={<Hotel />} />
          <Route path='dashboard' element={
            <Dashboard >
              <Table hoteles={hoteles} getHoteles={getHoteles} setHoteles={setHoteles}/>
              <HoteleForm hoteles={hoteles} getHoteles={getHoteles}/>
            </Dashboard>
          } />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
