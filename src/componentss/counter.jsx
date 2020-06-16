import React, { Component } from 'react';
class Counter extends Component {
   state = {
       count : 0,
       tag : ["tag1","tag2","tag3"]
   };
    render() { 
       
        return (
         <div>
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button className="btn btn-secondary btn-sm">increment</button>   
            <ul>
                {this.state.tag.map(tag => <li key={tag}>{tag}</li>)}
            </ul>
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

