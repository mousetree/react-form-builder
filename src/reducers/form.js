import {
    RECEIVE_FORM_DATA
} from '../actions';

import { Map } from 'immutable'

const initialState = Map({});

const form = (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_FORM_DATA:
            return action.data;
        default:
            return state
    }
};

export default form;