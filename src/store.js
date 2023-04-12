import {combineReducers, legacy_createStore as createStore} from 'redux';

const microFrontendOneReducer = (state = {count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT_ONE':
            return {...state, count: state.count + 1};
        case 'DECREMENT_ONE':
            return {...state, count: state.count - 1};
        default:
            return state;
    }
};

const microFrontendTwoReducer = (state = {count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT_TWO':
            return {...state, count: state.count + 1};
        case 'DECREMENT_TWO':
            return {...state, count: state.count - 1};
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    microFrontendOne: microFrontendOneReducer,
    microFrontendTwo: microFrontendTwoReducer,
});

const store = createStore(rootReducer);

export default store;
