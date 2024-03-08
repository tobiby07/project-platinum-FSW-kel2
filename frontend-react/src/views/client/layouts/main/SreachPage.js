import { useParams } from "react-router-dom";
import CardProduct from "./component/cardProduct";
import React, { useState, useEffect } from 'react';


const Search = ({ products }) => {
    const [searchResults, setSearchResults] = useState([]);
    const params = useParams()
    const queryProduct = params.query
  
    useEffect(() => {
      if (queryProduct.trim() !== '') {
        const filteredProducts = products.filter((product) =>
          product.productName.toLowerCase().includes(queryProduct.toLowerCase()) ||
          product.Brand.name.toLowerCase().includes(queryProduct.toLowerCase()) ||
          product.ProductCategory.categoryName.toLowerCase().includes(queryProduct.toLowerCase())
        );
        setSearchResults(filteredProducts);
      } else {
        setSearchResults([]);
      }
    }, [queryProduct, products]);
    
  
  
    return (
      <div className="">
  <div className="container my-4">
  <h1 className="mb-3 fw-semibold">
      {(products === undefined) ? "Loading..." : `Showing results for "${queryProduct}"`}
    </h1>
        {searchResults.length > 0 ? (
           <div className="row">
           {searchResults.map((product) => (
             <CardProduct key={product.id} product={product} />
           ))}
         </div>
        ) : (
          <p>No results found</p>
        )}
  
       
      </div>
      </div>
    );
  };

  export default Search