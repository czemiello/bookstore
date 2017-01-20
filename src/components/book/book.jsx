import React, { PropTypes } from 'react'
export default class Book extends React.Component {
    render () {
        const { title, id, kategorie, tytul } = this.props;

        return (
            <div className="Book">
                <div className="image">
                    <img src="http://placehold.it/200x200" />
                </div>
                <div className="details">
                    <div className="id">
                        { id }
                    </div>
                    <div className="title">
                        { title }
                    </div>
                </div>
            </div>
        )
    }
}
