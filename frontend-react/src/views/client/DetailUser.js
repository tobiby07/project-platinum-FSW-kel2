import Navbar from "./layouts/Header/component/Navbar";
import UserDetail from "./layouts/main/UserDetail.jsx";
import Footer from "./layouts/footer/Footer.js";

const DetailUSer = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <div className="mb-5">
        <UserDetail />
      </div>
      <Footer />
    </div>
  );
};
export default DetailUSer;
