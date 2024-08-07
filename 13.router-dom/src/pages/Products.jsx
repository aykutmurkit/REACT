import React from 'react';
import Product from './Product';

function Products() {
  const products = [
    {
      id: "1",
      name: "Bilgisayar",
      price: 50000,
    },
    {
      id: "2",
      name: "Telefon",
      price: 40000,
    }
  ];

  return (
    <div>
      {
        products && products.map((product) => (
          <Product key={product.id} product={product} />
        ))
      }
    </div>
  );
}

export default Products;
