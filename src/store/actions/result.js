import * as actionTypes from '../constants';

export const saveResult = (res) => {
    return {
        'type': actionTypes.STORE_RESULT,
        'counter': res
    }
}

export const storeResult = (counter) => {
    return (dispatch, getState) => {
        setTimeout(() => {
            console.log('oldCounter', getState().ctrReducer.counter);
            dispatch(saveResult(counter))
        }, 2000)
    }
}

export const deleteResult = (id) => {
    return {
        'type': actionTypes.DELETE_RESULT,
        'id': id
    }
}