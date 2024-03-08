import Navbar from "./layouts/Header/component/Navbar"
import Footer from "./layouts/footer/Footer"
import MainCartPage from "./layouts/main/CartPage"

const CartPage = () => {
    return (
        <div className="d-flex flex-column" style={{minHeight: "100vh"}}>
            <Navbar/>
            <MainCartPage/>
            <Footer/>
        </div>
    )
}

export default CartPage