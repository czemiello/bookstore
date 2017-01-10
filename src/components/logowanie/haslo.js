import React, {Component} from 'react';
import { Input, Button } from 'antd';
export default class Haslo extends Component {
  render() {
    let inputStyle={
        marginBottom:"10px"
    }
    return (
      <div className="logowanie" style={{
          width:"320px",
          padding:"10px",
          margin:"auto"
      }}>        
        <h1 style={{
            textAlign:"center",
            marginBottom:"20px"
        }}>Zmień hasło</h1>
        <Input style={inputStyle} type="password" placeholder="stare hasło"/>
        <Input style={inputStyle} type="password" placeholder="nowe hasło"/>
        <Input style={inputStyle} type="password" placeholder="powtórz hasło"/>
        <div style={{textAlign:"right"}} >
            <Button type="primary" icon="save">Zapisz</Button>
        </div>
      </div>
    );
  }
}
