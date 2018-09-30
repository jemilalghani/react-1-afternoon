import React, {Component} from 'react';

class FilterObject extends Component{
    constructor(){
        super();
        this.state = {
            unFilteredArray:  [ { "name": "Jimmy Joe", "title": "Hack0r", "age": 12 }, { "name": "Jeremy Schrader", "age": 24, "hairColor": "brown" }, { "name": "Carly Armstrong", "title": "CEO" } ],
            userInput:'',
            filteredArray:[],

        }
    this.solveToy = this.solveToy.bind(this);
    this.handleChange = this.handleChange.bind(this);

    }
    handleChange(event){
        this.setState({userInput: event});
    }
    solveToy(){
        const filterKey = this.state.userInput;
        const originalCopy = this.state.unFilteredArray;
        const filteredArr = originalCopy.filter(element => {return element.hasOwnProperty(filterKey)})
        this.setState({
            userInput: '',
            filteredArray: filteredArr});

        // for(let i=0;i<this.state.unFilteredArray.length;i++){
        //     for(let key in this.state.unFilteredArray[i]){
        //         if (userInput === this.state.unFilteredArray[i][key]){
        //             newArr.push(this.state.unFilteredArray[i][key]);
        //         }
        //     }
        // }
        // console.log(newArr);
        // this.setState({filteredArray:newArr});

    }
    
    render(){
        return(
           <div className="puzzleBox filterObjectPB">
               <h4>Filter Object</h4>
               <span className="puzzleText" >unFilteredArray:{JSON.stringify(this.state.unFilteredArray, null, 10)} </span>
               <input className="inputLine" 
               onChange={(e)=>this.handleChange(e.target.value)}></input>
               <button className="confirmationButton" 
               onClick={this.solveToy}>Filter
               </button>
               <span className="resultsBox filterObjectRB">filteredArray:{JSON.stringify(this.state.filteredArray)}</span>
           </div>
        )
    }
}

export default FilterObject;