import React from 'react';
import './App.css';

import { Filter } from "../Filter";
import { Cards } from "../Cards";
import { Util } from "../Util"
import { Navbar } from '../Navbar';
import { Aside } from '../Aside';
import { Login } from '../Login';
import { LoginRequired } from '../LoginRequired';
import { Table } from '../Table';

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
    hoteles,
    valid,
    setValid,
    rol,
    setRol
} = Util();

  return (
    <React.Fragment>
      {/* <Navbar /> */}
      <Router>
        <Routes>
          <Route path='/' element={
            <LoginRequired valid={valid}>
              <React.Fragment>
                <Filter />
                <div className="flex mb-4">
                  <Aside hoteles={hoteles} setHoteles={setHoteles}/>
                  <Cards hoteles={hoteles}/>
                </div>
              </React.Fragment>
            </LoginRequired>
          } />
          <Route path='login' element={<Login setValid={setValid} setRol={setRol}/>} />
          <Route path='dashboard' element={
            <Dashboard valid={valid} rol={rol} >
              <Table hoteles={hoteles}/>
              <HoteleForm />
            </Dashboard>
          } />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
