import React from 'react';
import {connect} from 'react-redux';

const MicroFrontendTwo = ({count, incrementCount, decrementCount}) => (
    <div>
        <h1>MicroFrontend Two</h1>
        <p>Count: {count}</p>
        <button onClick={incrementCount}>+</button>
        <button onClick={decrementCount}>-</button>
    </div>
);

const mapStateToProps = state => ({
    count: state.microFrontendTwo.count,
});

const mapDispatchToProps = dispatch => ({
    incrementCount: () => dispatch({type: 'INCREMENT_TWO'}),
    decrementCount: () => dispatch({type: 'DECREMENT_TWO'})
});

export default connect(mapStateToProps, mapDispatchToProps)(MicroFrontendTwo);
