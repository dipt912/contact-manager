import React from 'react';
import { View, Text, Modal } from 'react-native';
import { CardSection } from './CardSection';
import { Button } from './Button';


const Confirm = ({text, visible, onAccept, onDecline }) => {
    const { cardSectionStyle, textStyle, containerStyle} = styles;
    return (
        <Modal 
            visible = {visible}
            animationType='slide'
            onRequestClose={()=> {}}
            transparent>
            <View style={containerStyle}>
                <CardSection style={cardSectionStyle} >
                    <Text  style= {textStyle}> {text} </Text>
                </CardSection>
                <CardSection> 
                    <Button text='Yes' onPress= {onAccept}/>
                    <Button text='No' onPress= {onDecline} />
                </CardSection>
            </View>
        </Modal>
    );
};

const styles = {
    cardSectionStyle: {
        justifyContent: 'center',

    },
    textStyle: {
        flex: 1,
        fontSize: 18,
        textAlign: 'center',
        lineheight: 40
    },
    containerStyle: {
        backgroundColor: 'rgba(0,0,0,0.75)',
        position: 'relative',
        flex: 1,
        justifyContent: 'center'
    }
}


export  {Confirm};