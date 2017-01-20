export const HOST = 'http://localhost:8000'
import {getBooks} from '../actions/book.jsx';
export const bookList = dispatch => {
    fetch(`${HOST}/rest/ksiazki/`).
    then( response => response.json()).
    then( json => dispatch(getBooks(json)))
}
