import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions/productActions';
import { addToCart } from '../actions/cartActions';

const ProductList = ({ products, loading, error, fetchProducts, addToCart }) => {
  useEffect(() => {
    fetchProducts('all', 1);
  }, [fetchProducts]);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
        </div>
      ))}
      {/* Pagination controls */}
      {/* Add category-wise filters */}
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.products.products,
  loading: state.products.loading,
  error: state.products.error,
});

const mapDispatchToProps = {
  fetchProducts,
  addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
