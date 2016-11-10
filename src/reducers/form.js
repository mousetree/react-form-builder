import {
    RECEIVE_FORM_DATA
} from '../actions';

const initialState = {};

const form = (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_FORM_DATA:
            return Object.assign({}, state, action.data);
        default:
            return state
    }
};

export default form;