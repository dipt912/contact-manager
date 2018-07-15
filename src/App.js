import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { View } from 'react-native';
import reducers from './reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import LoginForm from './components/LoginForm';
import { Header } from './components/common'
import Router from './Router'; 

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: "AIzaSyBLgEigWRMZV51qSmLSAt8jG4X5GsqXp5A",
            authDomain: "manager-24231.firebaseapp.com",
            databaseURL: "https://manager-24231.firebaseio.com",
            projectId: "manager-24231",
            storageBucket: "manager-24231.appspot.com",
            messagingSenderId: "1078298047648"
          };
          firebase.initializeApp(config);
    }
    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}> 
                <Router/>
            </Provider>
        )
    }
}

export default App;
