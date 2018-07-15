import { EMAIL_CHANGED,
    PASSWORD_CHANGED, 
     LOGIN_USER_SUCCESS,
     LOGIN_USER_FAIL,
     LOGIN_USER
     } from './constants';
import firebase from 'firebase';   
import { Actions } from 'react-native-router-flux';

export const emailChanged = ( text ) => {
return {
    type: EMAIL_CHANGED,
    payload: text
};
};

export const passwordChanged = ( text ) => {
return {
    type: PASSWORD_CHANGED,
    payload: text
};
};



export const loginUser  = ({email, password}) => {
return (dispatch) => {
    dispatch({ type: LOGIN_USER, payload: true})
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user => logInUserSucesss(dispatch, user ))
    .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(user => logInUserSucesss(dispatch, user ))
        .catch(() => loginUserFailed(dispatch))
    })
}
}

const logInUserSucesss = (dispatch, user ) => {
dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
});
Actions.main();
}

const loginUserFailed = (dispatch ) => {
dispatch({
    type: LOGIN_USER_FAIL,
    payload: 'login user failed'
});
}