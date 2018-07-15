import { EMAIL_CHANGED,
        PASSWORD_CHANGED, 
        LOGIN_USER_SUCCESS,
        LOGIN_USER_FAIL, 
        LOGIN_USER
     } from '../actions/constants';

const INITIAL_STATE = {
    email: '',
    password: '',
    error: '',
    loading: false,
    user: null
}

export default (state = INITIAL_STATE, action) => {
    
    switch(action.type){
        case EMAIL_CHANGED:
          return  {...state, email: action.payload }

          case PASSWORD_CHANGED:
          return  {...state, password: action.payload } 

          case LOGIN_USER_SUCCESS:
          return  { ...state, 
                    ...INITIAL_STATE,
                    user: action.payload }
          
          case LOGIN_USER_FAIL:
          return  {...state, loading: false , error: action.payload , password: ''}
          
          case LOGIN_USER:
          return { ...state, loading: action.payload }
        default: 
            return state;
    }
}