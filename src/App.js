
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import store from './store';
import Login from './components/Login';
import ProductList from './components/ProductList';
import Navbar from './components/Navbar';
import Checkout from './components/Checkout';
import './App.css';

const App = () => {
  return (
    
    <Provider store={store}>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" exact component={ProductList} />
            <Route path="/checkout" component={Checkout} />
          </Routes>
        </div>
      </Router>
    </Provider>

  );
};

export default App;
