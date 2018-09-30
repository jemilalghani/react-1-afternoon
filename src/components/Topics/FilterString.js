import React, {Component} from 'react';

class FilterString extends Component{
    constructor(){
        super();
        this.state = {
            unFilteredArray: ["Jemila", "Madi", "Aisha", "Natalie", "Marcia", "Melody"],
            userInput: '',
            filteredArray: [],
        }
    this.solveToy = this.solveToy.bind(this);
    this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event){
        this.setState({userInput: event.target.value});
    }
    solveToy(){
        const filterString = this.state.userInput;
        const originalCopy = this.state.unFilteredArray;
        const filtered = originalCopy.filter(element => {return element.includes(filterString)});
        this.setState({
            userInput:'',
            filteredArray: filtered
        });
    }
    render(){
        return(
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span  className="puzzleText">unFilteredArray:{JSON.stringify(this.state.unFilteredArray, null, 10)}</span>
                <input className="inputLine" onChange={this.handleChange}></input>
                <button className="confirmationButton" onClick={this.solveToy}>Filter</button>
                <span className="resultsBox filterStringRB">filteredArray:{JSON.stringify(this.state.filteredArray)}</span>
            </div>
            
        )
    }
}

export default FilterString;