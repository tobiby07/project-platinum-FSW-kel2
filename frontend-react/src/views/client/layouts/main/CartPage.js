import React, { useState } from 'react';

const CartItem = ({ item }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (type) => {
    if (type === 'increment') {
      setQuantity(quantity + 1);
    } else {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    }
  };

  return (
    <div className="row">
      <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
        <div className="bg-image hover-overlay hover-zoom ripple rounded">
          <img src={item.image} className="w-100" alt={item.name} />
          <a href="#!">
            <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }} />
          </a>
        </div>
      </div>
      <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
        <p><strong>{item.name}</strong></p>
        <p>Color: {item.color}</p>
        <p>Size: {item.size}</p>
        <button className="btn btn-primary btn-sm me-1 mb-2" data-mdb-toggle="tooltip" title="Remove item">
          <i className="fas fa-trash" />
        </button>
        <button className="btn btn-danger btn-sm mb-2" data-mdb-toggle="tooltip" title="Move to the wish list">
          <i className="fas fa-heart" />
        </button>
      </div>
      <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
        <div className="d-flex mb-4" style={{ maxWidth: 300 }}>
          <button className="btn btn-primary px-3 me-2" onClick={() => handleQuantityChange('decrement')}>
            <i className="fas fa-minus" />
          </button>
          <div className="form-outline">
            <input
              min={0}
              name="quantity"
              value={quantity}
              type="number"
              className="form-control"
              readOnly
            />
          </div>
          <button className="btn btn-primary px-3 ms-2" onClick={() => handleQuantityChange('increment')}>
            <i className="fas fa-plus" />
          </button>
        </div>
        <p className="text-start text-md-center"><strong>{item.price}</strong></p>
      </div>
    </div>
  );
};

const Summary = ({ total }) => {
  return (
    <div className="card mb-4">
      <div className="card-header py-3">
        <h5 className="mb-0">Summary</h5>
      </div>
      <div className="card-body">
        <ul className="list-group list-group-flush">
          <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
            Products
            <span>{total}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center px-0">
            Shipping
            <span>Gratis</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
            <div>
              <strong>Total amount</strong>
              <strong><p className="mb-0">(including VAT)</p></strong>
            </div>
            <span><strong>{total}</strong></span>
          </li>
        </ul>
        <button type="button" className="btn btn-primary btn-lg btn-block">
          Go to checkout
        </button>
      </div>
    </div>
  );
};

const MainCartPage = () => {
  const items = [
    {
      name: 'Blue denim shirt',
      image: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/12a.webp',
      color: 'blue',
      size: 'M',
      price: '$17.99'
    },
    {
      name: 'Red hoodie',
      image: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/13a.webp',
      color: 'red',
      size: 'M',
      price: '$17.99'
    }
  ];

  const total = items.reduce((acc, item) => acc + parseFloat(item.price.replace('$', '')), 0).toFixed(2);

  return (
    <section className="">
      <div className="container py-5">
        <div className="row d-flex justify-content-center my-4">
          <div className="col-md-8">
            <div className="card mb-4">
              <div className="card-header py-3">
                <h5 className="mb-0">Cart - {items.length} items</h5>
              </div>
              <div className="card-body">
                {items.map((item, index) => (
                  <div key={index}>
                    <CartItem item={item} />
                    {index !== items.length - 1 && <hr className="my-4" />}
                  </div>
                ))}
              </div>
            </div>
            <Summary total={total} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainCartPage;
