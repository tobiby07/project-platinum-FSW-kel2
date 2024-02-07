import { useEffect } from "react";
import Navbar from "./layouts/Navbar";
import { useNavigate } from "react-router-dom";

function HomePage(){
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
        <main>
 HOME PAGE
</main>

        </>
    )
}
export default HomePage;