import React from 'react';
import Product from './Product';

export default function Main(props) {
  const { products, onAdd } = props;
  return (
    <main className="block col-2">
      <h2>your space design</h2>
      <h5>please double click on images and label!</h5>
      <div className="row">
      {products.map((product) => (
     <Product key={product.id} product={product} onAdd={onAdd}></Product>
        ))
        }
  
      
      </div>
    </main>
  );
}
