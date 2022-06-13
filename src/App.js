import React ,{useReducer} from "react";
import './App.css';
import { Route, Routes } from "react-router";
import "./App.css";

import Navbar from "./component/Navbar";
import Status from "./Pages/Status";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import RequireAuth from "./hoc/RequireAuth";
import { Switch } from '@chakra-ui/react'




function App() {


  return (
    <div className="App">
   <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/status"
          element={
            <RequireAuth>
              <Status />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>

      <Switch onChange={({Boolean})=> console.log(Boolean.State)} />
 </div>
  );
}

export default App;
