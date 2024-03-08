import HeaderHome from "./layouts/Header/HeaderHome";
import Footer from "./layouts/footer/Footer";
import ProductList from "./layouts/main/product-main";
import Navbar from "./layouts/Header/component/Navbar";

const HomePage = () => {
  return (
    <div className="d-flex flex-column" style={{minHeight: "100vh"}}>
      <Navbar/>
      <HeaderHome />
      <ProductList />
      <Footer />
    </div>
  );
};
export default HomePage;
