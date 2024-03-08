import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import adidas from "../../../image/adidas.png";
import converse from "../../../image/converse.png";
import league from "../../../image/league.png";
import nb from "../../../image/nb.png";
import nike from "../../../image/nike.png";
import sepatupria from "../../../image/sepatu-pria.png";
import sepatuwanita from "../../../image/sepatu-wanita.png";
import vans from "../../../image/vans.png";
import logo from "../../../image/logo.png";
import CardProduct from "./component/cardProduct";

const BrandMain = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const params = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_HOST}/api/products`);
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const brandName = params.brand;
  const filteredProducts = products.filter((product) => product.Brand.name === brandName);
  const brandNames = brandName.toUpperCase();
  let brandLogo;
  switch (brandName.toLowerCase()) {
    case "adidas":
      brandLogo = adidas;
      break;
    case "nike":
      brandLogo = nike;
      break;
    case "league":
      brandLogo = league;
      break;
    case "new balance (nb)":
      brandLogo = nb;
      break;
    case "vans":
      brandLogo = vans;
      break;
    case "converse":
      brandLogo = converse;
      break;
    case "other man":
      brandLogo = sepatupria;
      break;
    case "other woman":
      brandLogo = sepatuwanita;
      break;
    default:
      brandLogo = null;
  }

  return (
    <div className="container my-4">
      <div className="border rounded p-3">
        <div className="row align-items-center">
          <div className="col text-center">{brandLogo && <img src={brandLogo} alt="Brand Logo" style={{ width: "75%", height: "auto" }} />}</div>
          <div className="col text-center">
            <h4 className="fw-bold mb-0"> {brandNames} </h4>
            <h4 className="fw-bold mb-0">COLABORATION</h4>
          </div>
          <div className="col text-center">
            <img src={logo} alt="Brand Logo" style={{ width: "60%", height: "auto" }} />
          </div>
        </div>
      </div>

      <div className="row">
        {filteredProducts.map((product) => (
          <CardProduct key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default BrandMain;
