import React, {Component} from 'react';
import { Input, Button } from 'antd';
export default class Newsletter extends Component {
  render() {
    let inputStyle={
        marginBottom:"10px"
    }
    return (
      <div className="newsletter" style={{
          width:"320px",
          padding:"10px",
          margin:"auto"
      }}>        
        <h1 style={{
            textAlign:"center",
            marginBottom:"20px"
        }}>Zapisz się do newslettera</h1>
        <Input style={inputStyle} type="email" placeholder="email"/>
        <div style={{textAlign:"right"}} >
            <Button type="primary" icon="right">Zapisz się</Button>
        </div>
      </div>
    );
  }
}
