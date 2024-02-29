import CategoryPage from "./component/Category";
import Navbar from "./component/Navbar";
import Slider from "./component/Slider";

const HeaderHome = () => {
  return (
    // my-lg-5 my-md-3 my-sm-1
      <div className="my-4">
        <Slider />
        <CategoryPage />
      </div>
  );
};
export default HeaderHome;
