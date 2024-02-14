import {BrowserRouter as Router, Route, Switch, BrowserRouter, Routes } from 'react-router-dom'

import HomePage from "./views/HomePage";
import LoginPage from "./views/LoginPage";
import AddUser from './views/RegisterUser';
import Dashboard from './views/Dashboard';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        {/* user route */}
        <Route path='/' element={<LoginPage/>}/>
        <Route path="/register-user" element={<AddUser/>}/>
        <Route path="/home" element={<HomePage/>}/>

        {/* admin route */}
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;