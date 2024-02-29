import HeaderHome from "./layouts/Header/HeaderHome";
import Footer from "./layouts/footer/Footer";
import ProductList from "./layouts/main/product-main";
import Navbar from "./layouts/Header/component/Navbar";

const HomePage = () => {
  return (
    // className="overflow-x-hidden" style={{display: "flex", flexDirection: "column", minHeight: "100vh"}}
    <div>
      <Navbar/>
      <HeaderHome />
      <ProductList />
      <Footer />
    </div>
  );
};
export default HomePage;
