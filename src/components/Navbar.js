import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = ({ cartCount }) => {
  return (
    <div>
      <h2>Your Online Store</h2>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/checkout">Checkout ({cartCount} items)</Link>
      </nav>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartCount: state.cart.items.reduce((total, item) => total + item.quantity, 0),
});

export default connect(mapStateToProps)(Navbar);
