import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Admin from './views/admin/pages/dashboard';
import Brand from './views/admin/pages/brands';
import Product from './views/admin/pages/products';
import Category from './views/admin/pages/categories';
import LoginPage from './views/auth/LoginPage';
import AddUser from './views/auth/RegisterUser';
import HomePage from './views/client/HomePage';
import AddAdmin from './views/auth/RegisterAdmin';
import DetailUSer from './views/client/DetailUser';
import Customer from './views/admin/pages/customers';
import User from './views/admin/pages/users';
import CartPage from './views/client/CartPage';
import BrandPage from './views/client/BrandPage';
import DetailProduct from './views/client/detailProduct';

const idUser = await localStorage.getItem('id');


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* user route */}
          <Route path='/' element={< LoginPage />} />
          <Route path="/register-user" element={<AddUser />} />
          <Route path="/home" element={<HomePage />} />
          <Route path={`/detail-user/${idUser}`} element={<DetailUSer />} />


          {/* produtcs Route */}
          <Route path={`/product/:brand`} element={<BrandPage />} />
          <Route path={`/products/:id`} element={<DetailProduct />} />
          {/* Cart Route */}
          <Route path='/cart' element={<CartPage />} />

          {/* admin route */}
          <Route path="/register-admin" element={<AddAdmin />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/brands" element={<Brand />} />
          <Route path="/admin/products" element={<Product />} />
          <Route path="/admin/categories" element={<Category />} />
          <Route path="/admin/customers" element={<Customer />} />
          <Route path="/admin/users" element={<User />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

