import {
    REQUEST_FORM_DATA,
    RECEIVE_FORM_DATA
} from '../actions';

const initialState = {
    isRequestingData: false
};

const app = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_FORM_DATA:
            return Object.assign({}, state, {
                isRequestingData: true
            });
        case RECEIVE_FORM_DATA:
            return Object.assign({}, state, {
                isRequestingData: false
            });
        default:
            return state
    }
};

export default app;