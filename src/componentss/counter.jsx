import React, { Component } from 'react';
class Counter extends Component {
   state = {
       count : 0
   };
    render() { 
       
        return (
         <div>
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button className="btn btn-secondary btn-sm">increment</button>   
        </div>
        );
    }

    getBadgeClasses() {
        let badgeClasses = "badge m-2 badge-";
        badgeClasses += (this.state.count) === 0 ? "warning" : "primary";
        return badgeClasses;
    }

    formatCount () {

        const {count} = this.state;
        return count === 0 ? 'Zero' : count;
    }
}
 export default Counter;

