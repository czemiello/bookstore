import * as types from '../constants/book.jsx';
const HOST = 'http://localhost:8000'
export const getBooks = books => ({
    type:types.GET_BOOKS,
    books
})
export const fetchBooks = dispatch => {
    fetch(`${HOST}/rest/ksiazki/`).
    then( response => response.json()).
    then( json => dispatch(getBooks(json)))
}
