import * as actionTypes from './constants';

const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            return { ...state, counter: state.counter + 1 };
        case actionTypes.DECREMENT:
            return { ...state, counter: state.counter - 1 };
        case actionTypes.ADD:
            return { ...state, counter: state.counter + action.value };
        case actionTypes.SUBSTRACT:
            return { ...state, counter: state.counter - action.value };
        case actionTypes.STORE_RESULT:
            const results = [...state.results];
            results.push({ id: new Date(), value: state.counter });
            return { ...state, results: results };
        case actionTypes.DELETE_RESULT:
            const resultsArr = state.results.filter(r => r.id !== action.id);
            return { ...state, results: resultsArr };
        default:
            return state;
    }
}

export default reducer;