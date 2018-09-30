import React, {Component} from 'react';

class Sum extends Component{
    constructor(){
        super();
        this.state = {
            number1: 0,
            number2: 0,
            sum: null,
        }
        this.number1Change = this.number1Change.bind(this);
        this.number2Change = this.number2Change.bind(this);
        this.add = this.add.bind(this);
    }
   number1Change(event){
    this.setState({
        number1: event.target.value
    })
   }
   number2Change(event){
    this.setState({
        number2: event.target.value
    })
   }
   add(){
       const num1 = parseInt(this.state.number1,10);
       const num2 = parseInt(this.state.number2,10);
       let addition = num1 + num2;
       this.setState({
           sum: addition,
       })
   }
    render(){
        return(
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input className="inputLine" onChange={this.number1Change}></input>
                <input className="inputLine" onChange={this.number2Change}></input>
                <button className="confirmationButton" onClick={this.add}>Add</button>
                <span className="resultsBox">Sum:{ this.state.sum}</span>
            </div>
        )
    }
}

export default Sum;