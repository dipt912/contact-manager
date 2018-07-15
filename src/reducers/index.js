import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import ContactFormReducer from './ContactFormReducer';
import ContactList from   './contactListReducer';

export default combineReducers({
   auth: AuthReducer,
   contactForm: ContactFormReducer,
   contactList: ContactList
})