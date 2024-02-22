import CategoryPage from "./component/Category"
import Navbar from "./component/Navbar"
import Slider from "./component/Slider"

const HeaderHome = () => {
    return (
        <div >
            <Navbar/>
            <div className="my-lg-5 my-md-3 my-sm-1">
            <Slider/>
            <CategoryPage/>
            </div>
        </div>
    )
}
export default HeaderHome