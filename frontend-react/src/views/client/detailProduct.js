import Navbar from "./layouts/Header/component/Navbar";
import Footer from "./layouts/footer/Footer";
import ProductDetail from "./layouts/main/detailProduct";

const DetailProduct = () => {
  return (
    <div className="d-flex flex-column" style={{minHeight: "100vh"}}>
      <Navbar />
      <ProductDetail />
      <Footer />
    </div>
  );
};
export default DetailProduct;
