import Navbar from "./layouts/Header/component/Navbar";
import UserDetail from "./layouts/main/UserDetail.jsx";
import Footer from "./layouts/footer/Footer.js";

const DetailUSer = () => {
  return (
    <div className="d-flex flex-column" style={{minHeight: "100vh"}}>
      <Navbar />
        <UserDetail />
      <Footer />
    </div>
  );
};
export default DetailUSer;
