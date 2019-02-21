import * as actionTypes from '../constants';

const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            const results = [...state.results];
            results.push({ id: new Date(), value: action.counter });
            return { ...state, results: results };
        case actionTypes.DELETE_RESULT:
            const resultsArr = state.results.filter(r => r.id !== action.id);
            return { ...state, results: resultsArr };
        default:
            return state;
    }
}

export default reducer;