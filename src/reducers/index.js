// Set up your root reducer here...
 import { combineReducers } from 'redux';
 import {routerReducer} from 'react-router-redux';
 import books from './book.jsx';
 export default combineReducers({
     books,
    routing:routerReducer
 });
