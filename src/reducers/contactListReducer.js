import { CONTACT_FETCH_SUCESS } from '../actions/constants';

const INITIAL_STATE = {
   
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CONTACT_FETCH_SUCESS:
            return action.payload
        default:
            return state;
    }
}