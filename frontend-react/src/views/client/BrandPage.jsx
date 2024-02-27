
import Navbar from "./layouts/Header/component/Navbar";
import Footer from "./layouts/footer/Footer";
import BrandMain from "./layouts/main/brand";

const BrandPage = () => {


    return (
        <div className="">
            <Navbar/>
            <div className="container">
           <BrandMain/>
            </div>
            <Footer/>
        </div>
    );
}

export default BrandPage;
