import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const BrandMain = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const params = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/products");
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
                  src={`http://localhost:3001/images/${product.productImage}`}
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
                  <button className="btn btn-outline-danger text-nowrap my-1 my-sm-0 mx-1">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* <div>
                <h1>{brandName}</h1>
                <ul>
                    {filteredProducts.map(product => (
                        <li key={product.id}>
                            <Link to={`/products/${product.id}`}><h2>{product.productName}</h2></Link>
                            <p>{product.productDescription}</p>
                            <p>Price: {product.price}</p>
                            <p>{product.productImage ? <img src={`http://localhost:3001/images/${product.productImage}`} alt="product" width="200px" className='rounded m-2' /> : ''}</p>
                        </li>
                    ))}
                </ul>
            </div> */}

      {/* <div className="card" style={{ width: "18rem" }}>
                <img className="card-img-top" src="..." alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                        <p className="card-text">
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </p>
                    <a href="#" className="btn btn-primary">
                    Go somewhere
                    </a>
                </div>
            </div> */}
    </div>
  );
};

export default BrandMain;
