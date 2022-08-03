import React, { Component } from 'react';
class Counter extends Component {

    componentDidUpdate(prevProps,prevState) {
        console.log("prevProps",prevProps);
        console.log('prevState',prevState);
    }
  componentWillUnmount() {
    console.log('counter -unmount');
  }
    render() { 
        console.log('counter rendered')
       
        return (
         <div className='row'>
            <div className="col-1">
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            </div>
            <div className="col">
            <button onClick = {() => this.props.onIncrement(this.props.counter)} 
            className="btn btn-secondary btn-sm">
                +</button> 
            <button onClick = {() => this.props.onDecrement(this.props.counter)} 
            className="btn btn-secondary btn-sm m-2"
            disabled={this.props.counter.value === 0 ? "disabled" : ""}>
                -</button> 
            <button onClick={() => this.props.onDelete(this.props.counter.id)} 
            className="btn-danger btn-sm">Delete</button>  
            </div>
    
            
        </div>
        );
    };

    getBadgeClasses() {
        let badgeClasses = "badge m-2 badge-";
        badgeClasses += (this.props.counter.value) === 0 ? "warning" : "primary";
        return badgeClasses;
    }

    formatCount () {

        const {value: count} = this.props.counter;
        return count === 0 ? 'Zero' : count;
    }
}
 export default Counter;

