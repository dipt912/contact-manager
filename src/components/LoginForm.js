import React, { Component } from 'react';
import { Card, CardSection, Input, Button, Spinner } from './common';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import { emailChanged,passwordChanged, loginUser } from '../actions';

class LoginForm extends Component {
    onEmailChange(text){
        this.props.emailChanged(text);
    }
    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    onClickLogin(){
        const { email, password } = this.props;
        this.props.loginUser({email, password})
    }

    renderError() {
        if(this.props.error){
            return (
                <View style={{ backFroundColor: 'white'}} > 
                    <Text style = {styles.errorTextStyle}> 
                        {this.props.error}
                    </Text>
                </View>
            )
        }
    }

    renderButton() {
        if(this.props.loading){
            return <Spinner size ="small"/>;
        }
        return (
            <Button text='Login' onPress ={this.onClickLogin.bind(this)}> </Button>
        )
    }

    render() {
        return(
            <Card>
                <CardSection> 
                    <Input
                        label='Email'
                        placeholder='abc@xyz.ef'
                        onChangeText = {this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>  

                <CardSection> 
                <Input
                        secureTextEntry
                        label='Password'
                        placeholder='********'
                        onChangeText = {this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                </CardSection> 
                {this.renderError() }
                <CardSection> 
                    {this.renderButton()}
                </CardSection> 
             </Card>
        )
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}

const mapStateToProps = (state) => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        error : state.auth.error,
        loading : state.auth.loading
    }
}

export default connect(mapStateToProps, {emailChanged, passwordChanged, loginUser})(LoginForm);
