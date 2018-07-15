import { CONTACT_UPDATE, CONTACT_CREATE, CONTACT_SAVED_SUCESS } from '../actions/constants';

const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: 'Monday'
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CONTACT_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value }
        case CONTACT_CREATE:
            return { ...state, ...INITIAL_STATE }

        case CONTACT_SAVED_SUCESS:
            return { ...state, ...INITIAL_STATE }

        default:
            return state;
    }
}