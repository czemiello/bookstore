import * as types from '../constants/book.jsx';
export default function books(state = {
     books:[]
 }, action) {
     switch (action.type) {
         case types.GET_BOOKS:
             return {
                 ...state,
                 books:action.books
             }
             break;
         default:
            return state;
     }
}
