import React, {Component} from 'react';

class Palindrome extends Component{
    constructor(){
        super();
        this.state = {
            userInput: '',
            palindrome:'',
        }
    this.solveToy = this.solveToy.bind(this);
    this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.setState({userInput: event.target.value});
    }
    reverseString(userString){
        let splitString = userString.split(""); 
        let reverseArray = splitString.reverse();
        let joinArray = reverseArray.join("");
        return joinArray;
    }

    solveToy(){
        const str = this.state.userInput;
        const check = this.reverseString(str);
        if ( check === str) {
            this.setState({ palindrome: 'true' });
          } else {
            this.setState({ palindrome: 'false' });
          }
        }
    
    
    render(){
        return(
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <input className="inputLine" onChange={this.handleChange}></input>
                <button className="confirmationButton" onClick={this.solveToy}>Check</button>
                <span className="resultsBox">Palindrome: { this.state.palindrome }</span>
            </div>
        )
    }
}

export default Palindrome;