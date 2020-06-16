import React, { Component } from 'react';
class Counter extends Component {
   state = {
       count : 0,
       tag : []
   };

   renderTags() {
       if(this.state.tag.length === 0) return <p>There are no tags</p>;

       return <ul>{this.state.tag.map(tag => <li key={tag}>{tag}</li>)}</ul>
   }
    render() { 
       
        return (
         <div>
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button className="btn btn-secondary btn-sm">increment</button>   
            {this.renderTags()}
            {this.state.tag.length === 0 && "Please enter tags"}
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

