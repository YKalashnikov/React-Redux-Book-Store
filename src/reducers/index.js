import { combineReducers } from 'redux';

import books from './books';
import filter from './filter';
import cart from './cart';


export default combineReducers({
books,
cart,
filter
});
