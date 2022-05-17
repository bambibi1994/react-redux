import React from "react";
import { connect } from 'react-redux';

class ReduxCounter extends React.Component {
    increment = () => {
        this.props.dispatch({ type: 'INCREMENT' });
    }

    decrement = () => {
        this.props.dispatch({ type: 'DECREMENT' });
    }

    render() {
        return (
            <div>
                <h2>Counter</h2>
                <div>
                    <button onClick={this.decrement}>-</button>
                    <span>{this.props.count}</span>
                    <button onClick={this.increment}>+</button>
                </div>
            </div>
        )
    }

}

//Add this function:
function mapStateToProps(state) {
    return { count: state.count };
}

// Higher-order function
// Replace 'export default Counter' with this:
export default connect(mapStateToProps)(ReduxCounter);

