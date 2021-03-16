import * as actionsTypes from './actionsTypes';


export const saveResult = (res) => {
    return {
        type: actionsTypes.STORE_RESULT,
        result: res
    };
}


export const storeResult = (res) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(saveResult(res));
        }, 2000);
    }

};
export const deleteResult = (resId) => {
    return {
        type: actionsTypes.DELETE_RESULT,
        resultElId: resId
    };
};