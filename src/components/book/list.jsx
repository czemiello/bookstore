import React, { PropTypes } from 'react'
import { Card, Col, Row } from 'antd';

export default class BookList extends React.Component {
    render () {
        const { books } = this.props;
        console.log(books)
        let booksRender = books.map( book => (
            <Card style={{ width: 200 }} bodyStyle={{ padding: 0 }}>
              <div className="custom-image">
                <img alt="example" width="100%" src="http://placehold.it/200x300" />
              </div>
              <div className="custom-card">
                <h3>{book.tytul}</h3>
                <p>Jan Kowalski</p>
              </div>
            </Card>
        ))
        return (
            <div className="BookList">
                {booksRender}
            </div>
        )
    }
}
