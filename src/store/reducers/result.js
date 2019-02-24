import * as actionTypes from '../constants';
import { updateObject } from '../utility';

const initialState = {
    results: []
}

const addResult = (state, action) => {
    const results = [...state.results];
    results.push({ id: new Date(), value: action.counter });
    return updateObject(state, { results: results });
}

const deleteResult = (state, action) => {
    const results = state.results.filter(r => r.id !== action.id);
    return updateObject(state, { results: results });
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return addResult(state, action);
        case actionTypes.DELETE_RESULT:
            return deleteResult(state, action);
        default:
            return state;
    }
}

export default reducer;