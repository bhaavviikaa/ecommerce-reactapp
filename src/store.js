// store.js
import { createStore } from 'redux';
import rootReducer from './reducer'; // Create this file next

const store = createStore(rootReducer);

export default store;
