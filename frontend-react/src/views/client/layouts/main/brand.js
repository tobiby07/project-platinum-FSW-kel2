import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import AddToCartButton from "./component/addToCart";

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
  const filteredProducts = products.filter(
    (product) => product.Brand.name === brandName
  );

  return (
    <div className="container my-4">
      <h1 className="mb-3 fw-semibold">{brandName}</h1>
      <div className="row">
        {filteredProducts.map((product) => (
          <div key={product.id} className="col-6 g-1 col-md-4 col-lg-3 g-sm-4">
            <div className="card h-100">
              <Link to={`/products/${product.id}`}>
                {/* {product.productImage ? ( */}
                <img
                  src={`${process.env.REACT_APP_API_HOST}/images/${product.productImage}`}
                  alt={product.productName}
                  className="card-img-top"
                />
                {/* ) : ( */}
                {/* "" */}
                {/* )} */}
              </Link>
              <div className="card-body">
                <h6 className="card-title fw-semibold">
                  {product.productName}
                </h6>
                <p className="card-text text-secondary">
                  {product.ProductCategory.categoryName}
                </p>
                {/* <p>{product.productDescription}</p> */}
                <p className="card-text">
                  Rp. {product.price.toLocaleString()}
                </p>
              </div>
              <div className="card-footer">
                <div className="d-flex justify-content-center justify-content-sm-between align-items-center flex-wrap flex-sm-nowrap">
                  <Link to={`/products/${product.id}`} className="btn btn-dark my-1 my-sm-0 mx-1">
                    Detail
                  </Link>
                  <AddToCartButton productId={product.id} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div> 
    </div>
  );
};

export default BrandMain;
