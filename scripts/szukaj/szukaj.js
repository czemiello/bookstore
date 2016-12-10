import React, {Component} from 'react';
import { Input, Button } from 'antd';
export default class Szukaj extends Component {
  render() {
    let inputStyle={
        flex:"1",
        marginRight:"10px"
    }
    return (
      <div className="szukaj" style={{
          width:"320px",
          padding:"10px",
          margin:"auto"
      }}>        
        <h1 style={{
            textAlign:"center",
            marginBottom:"20px"
        }}>Wyszukaj</h1>
        <div style={{
            display:"flex"
        }} >
            <Input style={inputStyle} type="text" placeholder="Wpisz szukaną frazę"/>
            <Button type="primary" icon="search">Szukaj</Button>
        </div>
      </div>
    );
  }
}
