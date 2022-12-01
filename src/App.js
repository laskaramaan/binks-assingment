import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import UserDetails from './components/UserDetails/UserDetails';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/userDetails/:uuid' element={<UserDetails></UserDetails>}></Route>
        <Route path='/Login' element={<Login></Login>}></Route>

      </Routes>
    </div>
  );
}

export default App;
