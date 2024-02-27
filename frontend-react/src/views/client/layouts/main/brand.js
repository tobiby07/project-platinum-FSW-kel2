import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const BrandMain = () => {
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
            <div>
                <h1>{categoryName}</h1>
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
            </div>
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
}

export default BrandMain;
