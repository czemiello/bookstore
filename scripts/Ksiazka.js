import React, {Component} from 'react';
export default class Ksiazka extends Component {
  render() {
    return (
      <div className="ksiazka">
        <div className="okladka"><img src={this.props.okladka} /></div>
        <div className="kategoria">{this.props.kategoria}</div>
        <div className="tytul">{this.props.tytul}</div>
        <div className="autor">{this.props.autor}</div>
        <div className="opis">{this.props.opis}</div>
        <div className="cena">{this.props.cena}</div>
      </div>
    );
  }
}
