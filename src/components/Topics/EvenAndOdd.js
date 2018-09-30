import React, {Component} from 'react';

class EvenandOdd extends Component {
    constructor(){
        super();
        this.state={
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
        this.solveToy=this.solveToy.bind(this);
        this.handleChange=this.handleChange.bind(this);
       
    }
    handleChange(event){
        this.setState({userInput: event});
    }
    solveToy(user){
        let arr=user.split(',');
        let even=[];
        let odd=[];

        for (let i =0; i<arr.length;i++){
            if (arr[i]%2===0){
                even.push(arr[i]);
            } else {
                odd.push(arr[i]);
            }
        }
    this.setState({evenArray:even, oddArray:odd});
    }
    render(){
        return(
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input className="inputLine"  
                onChange={(e)=>this.handleChange(e.target.value)}>
                </input>
                <button className="confirmationButton" onClick={()=>{this.solveToy(this.state.userInput)}}>
                Split</button>
                <span className="resultsBox">Evens: {JSON.stringify(this.state.evenArray)} </span>
                <span className="resultsBox">Odds: {JSON.stringify(this.state.oddArray)} </span>
            </div>
        )
    }
}

export default EvenandOdd;