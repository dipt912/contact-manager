import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from './common'
import { connect } from 'react-redux';
import { contactUpdate, contactCreate } from '../actions';
import ContactForm from './ContactForm';

class ContactCreate extends Component {
    onButtonPress(){
        const { name,phone, shift } = this.props
        this.props.contactCreate({name, phone, shift:shift || 'Monday'})
    }
    render() {
        return (
            <Card>
                <ContactForm {...this.props} />
                <CardSection>
                    <Button text='create' onPress ={this.onButtonPress.bind(this)}/>
                </CardSection>

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

export default connect(mapStateToProps, { contactUpdate, contactCreate })(ContactCreate);