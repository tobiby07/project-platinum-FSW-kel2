import HeaderHome from "./layouts/Header/HeaderHome";
import Footer from "./layouts/footer/Footer";
import ProductList from "./layouts/main/product-main";

const HomePage = () => {
  return (
    <div className="overflow-x-hidden" style={{display: "flex", flexDirection: "column", minHeight: "100vh"}}>
      <HeaderHome />
      <div className="container">
        <ProductList />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};
export default HomePage;
