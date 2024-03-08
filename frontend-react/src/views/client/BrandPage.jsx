import Navbar from "./layouts/Header/component/Navbar";
import Footer from "./layouts/footer/Footer";
import BrandMain from "./layouts/main/brand";

const BrandPage = () => {
  return (
    <div className="d-flex flex-column" style={{minHeight: "100vh"}}>
      <Navbar />
      <BrandMain />
      <Footer />
    </div>
  );
};

export default BrandPage;
