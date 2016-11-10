export const REQUEST_FORM_DATA = 'REQUEST_FORM_DATA';
export const RECEIVE_FORM_DATA = 'RECEIVE_FORM_DATA';

export function fetchFormData() {
    return dispatch => {
        dispatch(requestFormData());
        return fetch(`/api/forms/0`)
            .then(response => response.json())
            .then(json => dispatch(receiveFormData(json)))
    }
}

function requestFormData() {
    return {
        type: REQUEST_FORM_DATA
    }
}

function receiveFormData(data) {
    return {
        type: RECEIVE_FORM_DATA,
        data
    }
}