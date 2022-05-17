// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import reportWebVitals from './reportWebVitals';

// import StateCounter from './components/StateCounter';
// // import {connect } from 'react-redux';

// ReactDOM.render(<StateCounter />, document.getElementById('root'));


// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import ReduxCounter from './components/ReduxCounter';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const initialState = { count: 0 };

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + 1,
            };
        case 'DECREMENT':
            return {
                count: state.count - 1,
            };
            default:
                return state;
    }
}

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <ReduxCounter />
    </Provider>,
    document.getElementById('root'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
