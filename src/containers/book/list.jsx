import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import  BookList  from '../../components/book/list.jsx'
import { fetchBooks } from '../../actions/book.jsx'
class BookListContainer extends React.Component {
    componentDidMount(){
        const { dispatch } = this.props
        fetchBooks(dispatch)
    }
    render () {
        const { books } = this.props
        return (
            <div>
                <BookList
                    books={books.books}
                />
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    ...state
})
export default connect(mapStateToProps)(BookListContainer);
