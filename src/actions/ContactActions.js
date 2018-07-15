import { CONTACT_UPDATE , CONTACT_CREATE, CONTACT_FETCH_SUCESS, CONTACT_SAVED_SUCESS } from './constants';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

export const contactUpdate = ({ prop, value }) => {
    return {
        type: CONTACT_UPDATE,
        payload: { prop, value }
    };
};

export const contactCreate = ({ name,phone, shift })=> {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/contacts`)
        .push({name, phone, shift})
        .then(() => {
            dispatch({type : CONTACT_CREATE})
            Actions.contactsList({ type : 'reset'})
        })

    }
};


export const contactsFetch = () => {
    const { currentUser } = firebase.auth();
    return(dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/contacts`)
            .on('value', snapshot => {
                dispatch({ type: CONTACT_FETCH_SUCESS, payload: snapshot.val()})
            })
    };
}

export const contactSaved= ({ name, phone, shift, uid }) => {
    const { currentUser } = firebase.auth();
    return(dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/contacts/${uid}`)
            .set({ name, phone, shift})
            .then(()=> {
                dispatch({type : CONTACT_SAVED_SUCESS });
                Actions.contactsList({ type : 'reset'});
                
            })
           
    };
}

export const contactDelete = ({ uid }) => {
    const { currentUser } = firebase.auth();
    return(dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/contacts/${uid}`)
            .remove()
            .then(()=> {
                dispatch({type : CONTACT_SAVED_SUCESS });
                Actions.contactsList({ type : 'reset'});
                
            })
           
    };
}