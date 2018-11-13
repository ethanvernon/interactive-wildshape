import React, { Component } from 'react';
import './App.css';

export class BabInput extends Component {
  constructor(props) {
    super(props);
    this.handleBabChange = this.handleBabChange.bind(this);
  }

  handleBabChange(e) {
  	/*console.log(e.target.value);
    const newStrength = this.props.changeStr(parseInt(e.target.value));
    console.log("changeStr changed to "+ newStrength);
    this.props.onChange(newStrength);*/

    this.props.onChange(parseInt(e.target.value), this.props.changeBab(parseInt(e.target.value)));
  }




  render() {
    return (
      <div>
        <span>Base attack bonus: </span>
        <input 
        	id="babScore"
        	type="number"
        	min="0"
        	max="20"
        	defaultValue={this.props.bab} 
        	onInput = {this.handleBabChange}/>        
      </div>
    );
  }
}
