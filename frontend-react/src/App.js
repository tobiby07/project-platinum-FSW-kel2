import {BrowserRouter as Router, Route, Switch, BrowserRouter, Routes } from 'react-router-dom'

import HomePage from "./views/HomePage";
import LoginPage from "./views/LoginPage";
import CreateUser from './views/RegisterUser';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/register-user" element={<CreateUser/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;