import React from 'react';
import { withRouter } from 'react-router';
import uuid from 'uuid';
import Button from '../buttons';
import './ItemForm.css';

class ItemForm extends React.Component {

    constructor(props) {
        super(props);
        const data = props.data ? props.data : { 
          tyyppi : "Vesi",
          summa : 0,
          maksupaiva : "",
          kaudenalku : "",
          kaudenloppu : "",
          saaja : ""
       }
        this.state = {
            data: data
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleDeleteItem = this.handleDeleteItem.bind(this);
    }

    handleInputChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
  
      this.setState({
        data: {
          ...this.state.data,
          [name]: value
        }
      });
    }

    handleCancel(event) {
      event.preventDefault();
      this.props.history.goBack();
    }

    handleSubmit(event) {
      event.preventDefault();
      let data = Object.assign({}, this.state.data);
      data.summa = parseFloat(data.summa);
      data.id = data.id ? data.id : uuid.v4();
      this.props.onFormSubmit(data);
      this.props.history.push("/");
    }

    handleDeleteItem(event) {
      event.preventDefault();
      this.props.onDeleteItem(this.state.data.id);
      this.props.history.push("/");
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>

            <div className="itemform">
  
                <div className="itemform_row">
                  <div>
                    <label htmlFor="name">Kulutyyppi</label>
                    <select name="tyyppi" value={this.state.data.tyyppi} onChange={this.handleInputChange}>
  
                      {this.props.selectList.map(item => <option value={item} key={item}>{item}</option>)}
  
                    </select>
                  
                  </div>
                </div>
  
                <div className="itemform_row">
                  <div>
                    <label htmlFor="summa">Summa</label>
                    <input type="number" name="summa" step="0.1" value={this.state.data.summa} onChange={this.handleInputChange} />
                  </div>  
  
                  <div>
                    <label htmlFor="maksupaiva">Maksupäivä</label>
                    <input type="date" name="maksupaiva" value={this.state.data.maksupaiva} onChange={this.handleInputChange} />
                  </div>
                </div>
  
                <div className="itemform_row">
                  <div>
                    <label htmlFor="kaudenalku">Laskutuskauden alku</label>
                    <input type="date" name="kaudenalku" size="10" value={this.state.data.kaudenalku} onChange={this.handleInputChange} />
                  </div>  
  
                  <div>  
                    <label htmlFor="kaudenloppu">Laskutuskauden loppu</label>
                    <input type="date" name="kaudenloppu" size="10" value={this.state.data.kaudenloppu} onChange={this.handleInputChange} />
                  </div>
                </div>
  
                <div className="itemform_row">
                  <div>
                    <label htmlFor="saaja">Saaja</label>
                    <input type="text" name="saaja" value={this.state.data.saaja} onChange={this.handleInputChange} />
                  </div>
              </div>
  
              <div className="itemform_row">
                <div>
                  <Button onClick={this.handleCancel}>Peruuta</Button>
                </div>
                <div>
                  <Button type="submit"primary>{this.state.data.id ? "Tallenna" : "Lisää"}</Button>
                </div>
              </div>

              { this.props.onDeleteItem ?
                <div className="itemform__row">
                  <div>
                    <Button onClick={this.handleDeleteItem}>Poista</Button>
                    </div>
                    <div></div>  
                    </div> : "" }
            
  
            </div>
  
          </form>
        );


    }

}

export default withRouter(ItemForm);