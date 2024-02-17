import { useEffect } from "react";
import Navbar from "./layouts/Navbar";
import { useNavigate } from "react-router-dom";
import ProductForm from "./component/AddProduct";
import CategoryForm from "./component/Category";
import UserList from "./component/GetUser";
import ProductList from "./component/GetProduct";

function Dashboard(){
  const history = useNavigate();

  useEffect(() => {
      const token = localStorage.getItem('token');
      if (!token) {
          history('/');
      }
  }, [history]);

    return(
        <>
        <Navbar/>
        <ProductForm/>
        <ProductList/>
        <CategoryForm/>
        <UserList/>
        <main>
 Dashboard
</main>


        </>
    )
}
export default Dashboard;