import HeaderHome from "./layouts/Header/HeaderHome"
import Footer from "./layouts/footer/Footer"
import ProductList from "./layouts/main/product-main"

const HomePage = ()=> {
    return(
        <div>
            <HeaderHome/>
            <div className="container">
            <ProductList/>
                
            </div>
            <Footer/>
        </div>
    )
}
export default HomePage