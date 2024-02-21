import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import HomePage from "./views/HomePage";
import LoginPage from "./views/LoginPage";
import AddUser from './views/RegisterUser';
import Dashboard from './views/Dashboard';
import AddAdmin from './views/RegisterAdmin';
import Admin from './views/admin/pages/dashboard';
import Product from './views/admin/pages/products';
import Category from './views/admin/pages/categories';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* user route */}
          <Route path='/' element={<LoginPage />} />
          <Route path="/register-user" element={<AddUser />} />
          <Route path="/home" element={<HomePage />} />

          {/* admin route */}
          <Route path="/register-admin" element={<AddAdmin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/products" element={<Product />} />
          <Route path="/admin/categories" element={<Category />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;