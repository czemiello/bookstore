import React, {Component} from 'react';
import { Input, Button, Option, Select } from 'antd';
export default class Kontakt extends Component {
  constructor(props){
      super(props);
      this.state = {
          tematy:[
              {
                  label:"Pomoc",
                  value:"pomoc"
              },
              {
                  label:"Rezerwacja",
                  value:"rezerwacja"
              },
              {
                  label:"Przedłużenie terminu",
                  value:"termin"
              }
          ]
      }
  }
  componentDidMount(){

  }
  render() {
    let inputStyle={
        marginBottom:"10px"
    }
    let menu_options = this.state.tematy.map((temat) => {
        return <Select.Option value={temat.value} key={temat.value}>{temat.label}</Select.Option>
    })
    return (
      <div className="kontakt" style={{
          width:"480px",
          padding:"10px",
          margin:"auto"
      }}>        
        <h1 style={{
            textAlign:"center",
            marginBottom:"20px"
        }}>Skontaktuj się z nami</h1>
        <Select defaultValue="pomoc" style={{
            width:"100%",
            marginBottom:"20px"
        }}>
            {menu_options}
        </Select>
        <Input style={inputStyle} type="textarea" placeholder="wiadomość"/>
        <div style={{textAlign:"right"}} >
            <Button type="primary" icon="right">Skontaktuj się</Button>
        </div>
      </div>
    );
  }
}
