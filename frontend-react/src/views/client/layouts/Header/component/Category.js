import adidas from "../../../../image/adidas.png";
import nb from "../../../../image/nb.png";
import nike from "../../../../image/nike.png";
import sepatuPria from "../../../../image/sepatu-pria.png";
import sepatuWanita from "../../../../image/sepatu-wanita.png";
import league from "../../../../image/league.png";
import vans from "../../../../image/vans.png";
import converse from "../../../../image/converse.png";

const Conten = ({ picture, alt, value }) => {
  return (
    <div className="col-6 col-md-4 col-lg-3">
      <a href={`/product/${value}`}>
        <img
          src={picture}
          alt={alt}
          className="img-thumbnail img-fluid shadow"
          //   style={{ boxShadow: "5px 5px 5px rgba(0,0,0,0.5)" }}
        />
      </a>
    </div>
  );
};

const CategoryPage = () => {
  const brands = [
    { picture: adidas, alt: "Adidas", value: "Adidas" },
    { picture: nb, alt: "Nb", value: "New Balance (NB)" },
    { picture: nike, alt: "Nike", value: "Nike" },
    { picture: sepatuWanita, alt: "SepatuWanita", value: "Other Woman" },
    { picture: league, alt: "League", value: "League" },
    { picture: converse, alt: "Converse", value: "Converse" },
    { picture: vans, alt: "Vans", value: "Vans" },
    { picture: sepatuPria, alt: "SepatuPria", value: "Other Man" },
  ];

  return (
    <div className="container my-4 my-md-5">
      <h4 className="fw-semibold text-center mb-3 mb-md-4">BRANDS</h4>
      <div className="row justify-content-center g-3">
        {brands.map((brand, index) => (
          <Conten
            key={index}
            picture={brand.picture}
            alt={brand.alt}
            value={brand.value}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
