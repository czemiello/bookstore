import React, { PropTypes } from 'react'
import { Card, Col, Row, Tag, Button, Form, DatePicker } from 'antd';

const MonthPicker = DatePicker.MonthPicker;
const RangePicker = DatePicker.RangePicker;

export default class BookList extends React.Component {
    state = {
        activeBookId:null
    };
    setActiveBook = (id) =>{
        this.setState({
            activeBookId:id
        })
    }
    closeActiveBook = () =>{
        this.setState({
            activeBookId:null
        })
    }
    lend = (id) =>{

    }
    render () {
        const { books } = this.props;
        const { activeBookId } = this.state;
        let filteredBooks = [...books];
        let bookEdit;
        if(activeBookId !== null){
            filteredBooks = filteredBooks.filter( book => book.id === activeBookId )
            bookEdit = (
                <Card style={{ width: 400 }} bodyStyle={{ padding: 0 }}>
                  <div className="custom-card">
                      <Button onClick={this.closeActiveBook} type="primary" icon="close">Powrót do listy</Button>
                      <Form>
                          <Form.Item label="termin wypożyczenia">
                              <RangePicker />
                          </Form.Item>
                          <Form.Item>
                              <Button onClick={() => { this.lend(activeBookId) }} type="primary" icon="solution">Wypożycz</Button>
                          </Form.Item>
                      </Form>
                  </div>
                </Card>
            )
        }
        let booksRender = filteredBooks.map( book => (
            <Card onClick={()=>{ this.setActiveBook(book.id) }} style={{ width: 200 }} bodyStyle={{ padding: 0 }}>
              <div className="custom-image">
                <img alt="example" width="100%" src={`http://lorempixel.com/${book.id+200}/300`} />
              </div>
              <div className="custom-card">
                <h3>{book.tytul}</h3>
                { book.autorzy.map( autor => (
                    <p>{autor.imie} {autor.nazwisko}</p>
                )) }
                <div>
                { book.kategorie.map(kategoria => (
                    <Tag>{kategoria.nazwa}</Tag>
                ))}
                </div>
              </div>
            </Card>
        ))
        return (
            <div>
                <h1>Najnowsze propozycje</h1>
                <div className="BookList">
                    {booksRender}
                    {bookEdit}
                </div>
            </div>
        )
    }
}
