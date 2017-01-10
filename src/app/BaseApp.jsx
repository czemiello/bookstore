import React, { PropTypes } from 'react'
import BookListContainer from '../containers/book/list.jsx'
export default class BaseApp extends React.Component {
    render () {
        return (
            <div className="BaseApp">
                <BookListContainer />
            </div>
        )
    }
}
