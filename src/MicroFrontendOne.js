import React from 'react';
import {connect} from 'react-redux';

const MicroFrontendOne = ({count, incrementCount, decrementCount}) => (
    <div>
        <h1>MicroFrontend One</h1>
        <p>Count: {count}</p>
        <button onClick={incrementCount}>+</button>
        <button onClick={decrementCount}>-</button>
    </div>
);

const mapStateToProps = state => ({
    count: state.microFrontendOne.count,
});

const mapDispatchToProps = dispatch => ({
    incrementCount: () => dispatch({type: 'INCREMENT_ONE'}),
    decrementCount: () => dispatch({type: 'DECREMENT_ONE'})
});

export default connect(mapStateToProps, mapDispatchToProps)(MicroFrontendOne);
