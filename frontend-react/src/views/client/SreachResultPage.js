import React, { useState, useEffect } from 'react';
import Navbar from './layouts/Header/component/Navbar';
import Footer from './layouts/footer/Footer';
import { Link, useParams } from 'react-router-dom';
import axiosObject from '../../services/axiosUrl';


const Search = ({ products }) => {
const [searchResults, setSearchResults] = useState([]);
const params = useParams()

  useEffect(() => {
    const queryProduct = params.query
    if (queryProduct.trim() !== '') {
        const filteredProducts = products.filter((product) =>
          product.productName.toLowerCase().includes(queryProduct.toLowerCase())
        );
        setSearchResults(filteredProducts);
      }
       else {
      setSearchResults([]);
    }
  });


  return (
    <div className="">
<div className="container my-4">
      <h1 className="mb-3 fw-semibold">{}</h1>
      {searchResults.length > 0 ? (
         <div className="row">
         {searchResults.map((product) => (
           <div key={product.id} className="col-6 g-1 col-md-4 col-lg-3 g-sm-4">
             <div className="card h-100">
               <Link to={`/products/${product.id}`}>
                 <img
                   src={`${process.env.REACT_APP_API_HOST}/images/${product.productImage}`}
                   alt={product.productName}
                   className="card-img-top"
                 />
               </Link>
               <div className="card-body">
                 <h6 className="card-title fw-semibold">
                   {product.productName}
                 </h6>
                 <p className="card-text text-secondary">
                   {product.ProductCategory.categoryName}
                 </p>
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
      ) : (
        <p>No results found</p>
      )}

     
    </div>
    </div>
  );
};

const SearchPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axiosObject.get('/api/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);



  return (
    <div className="">
      <Navbar  />
      <Search products={products} />
      <Footer />
    </div>
  );
};

export default SearchPage;
