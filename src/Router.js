import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import ContactsList from './components/ContactsList';
import ContactCreate from './components/ContactCreate';
import ContactEdit from './components/ContactEdit';


const RouterComponent = () => {
    return (
        <Router>
            <Scene key='root' hideNavBar> 
                <Scene key='auth'> 
                    <Scene key='login' component={LoginForm} title='Please Login' initial/> 
                </Scene>
                <Scene key='main'> 
                    <Scene 
                        rightTitle='Add'
                        onRight={()=> Actions.contactCreate()}
                        key='contactsList'
                         component={ContactsList} 
                         title='Contact List' 
                         /> 
                    <Scene  
                        key='contactCreate' 
                        component={ContactCreate} 
                        title='create contact'/>  
                         <Scene  
                        key='contactEdit' 
                        component={ContactEdit} 
                        title='Edit contact'/> 
                </Scene>
               
            </Scene> 
        </Router>
    )
}
export default RouterComponent;