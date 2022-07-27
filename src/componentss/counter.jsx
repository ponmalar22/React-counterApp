import React, { Component } from 'react';
class Counter extends Component {
   state = {
       value : this.props.value
   };

   handleEvent = () => {
      
       this.setState({value : this.state.value + 1});
   };
    render() { 
       
        return (
         <div>
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button onClick = {this.handleEvent} className="btn btn-secondary btn-sm">
                increment</button> 
            <button onClick={this.props.onDelete} className="btn-danger btn-sm m-2">Delete</button>  
            
        </div>
        );
    };

    getBadgeClasses() {
        let badgeClasses = "badge m-2 badge-";
        badgeClasses += (this.state.value) === 0 ? "warning" : "primary";
        return badgeClasses;
    }

    formatCount () {

        const {value: count} = this.state;
        return count === 0 ? 'Zero' : count;
    }
}
 export default Counter;

