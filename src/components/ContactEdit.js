import React, { Component } from 'react';
import { Card, CardSection, Button, Confirm } from './common'
import { connect } from 'react-redux';
import { contactUpdate, contactSaved, contactDelete } from '../actions';
import ContactForm from './ContactForm';
import _ from 'lodash';
import Communication from 'react-native-communications';

class ContactEdit extends Component {
    state = {
        showModal: false
    }
    componentWillMount() {
        _.each(this.props.contact, (value, prop) => {
            this.props.contactUpdate({ prop, value });
        })
    }

    onButtonPress() {
        const { name, phone, shift } = this.props;
        this.props.contactSaved({ name, phone, shift, uid: this.props.contact.uid })
    }

    onTextPress() {
        const { phone, shift } = this.props;
        Communication.text(phone, `your shift is ${shift}`);
    }
    onDecline() {
        this.setState({ showModal : !this.state.showModal})
    }

    onAccept() {
        const { uid } = this.props.contact;
       this.props.contactDelete({ uid });
    }

    render() {
        return (
            <Card>
                <ContactForm />
                <CardSection>
                    <Button text='save Changes' onPress={this.onButtonPress.bind(this)}> </Button>
                </CardSection>
                <CardSection>
                    <Button text='Text Message' onPress={this.onTextPress.bind(this)}> </Button>
                </CardSection>
                <CardSection>
                    <Button text='Fire Contact' onPress={()=> this.setState({showModal : !this.state.showModal})}>
                    </Button>
                </CardSection>
                <Confirm
                    visible={this.state.showModal}
                    onAccept={this.onAccept.bind(this)} 
                    onDecline={this.onDecline.bind(this)} 
                    text='are you sure to Delete?'>
                    
                 </Confirm>
            </Card>
        )
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.contactForm;
    return {
        name, phone, shift
    }
}

export default connect(mapStateToProps, { contactUpdate, contactSaved, contactDelete })(ContactEdit);