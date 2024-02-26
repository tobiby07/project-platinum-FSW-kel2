import { useState, useEffect } from 'react';
import Navbar from "./layouts/Header/component/Navbar";
import Footer from "./layouts/footer/Footer";
import { useParams } from 'react-router-dom';

const BrandPage = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const params = useParams()

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:3001/api/products');
                if (!response.ok) {
                    throw new Error('Failed to fetch products');
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


    const categoryName = params.brand; 
    const filteredProducts = products.filter(product => product.ProductCategory.categoryName === categoryName);

    return (
        <div className="">
            <Navbar/>
            <div>
                <h1>{categoryName} Products</h1>
                <ul>
                    {filteredProducts.map(product => (
                        <li key={product.id}>
                            <h2>{product.productName}</h2>
                            <p>{product.productDescription}</p>
                            <p>Price: {product.price}</p>
                            <p>{product.productImage ? <img src={`http://localhost:3001/images/${product.productImage}`} alt="product" width="200px" className='rounded m-2' /> : ''}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <Footer/>
        </div>
    );
}

export default BrandPage;
