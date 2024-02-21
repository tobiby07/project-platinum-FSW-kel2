import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Admin from './views/admin/pages/dashboard';
import Product from './views/admin/pages/products';
import Category from './views/admin/pages/categories';
import LoginPage from './views/auth/LoginPage';
import AddUser from './views/auth/RegisterUser';
import HomePage from './views/client/HomePage';
import AddAdmin from './views/auth/RegisterAdmin';
import DetailUSer from './views/client/DetailUser';

const idUser = await localStorage.getItem('id');


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* user route */}
          <Route path='/' element={< LoginPage/>} />
          <Route path="/register-user" element={<AddUser />} />
          <Route path="/home" element={<HomePage />} />
          <Route path={`/detail-user/${idUser}`} element={<DetailUSer />} />

          {/* admin route */}
          <Route path="/register-admin" element={<AddAdmin />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/products" element={<Product />} />
          <Route path="/admin/categories" element={<Category />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

