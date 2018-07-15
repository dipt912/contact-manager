import React, { Component } from 'react';
import { ListView, Text, View } from 'react-native';
import { Card } from './common';
import { connect } from 'react-redux';
import { contactsFetch } from '../actions'
import _ from 'lodash';
import ListItem from './ListItem';

class ContactsList extends Component {
    componentWillMount() {
        this.props.contactsFetch();
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        })

        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps) {
        //nextProps of next set of props and this.props is old state of props
        this.createDataSource(nextProps);


    }

    createDataSource({ contactList }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        })
        this.dataSource = ds.cloneWithRows(contactList);
    }
    renderRow(contactList) {
        return <ListItem contact={contactList} />
    }

    render() {
        return (
            <Card>
                <ListView
                    enableEmptySections
                    dataSource={this.dataSource}
                    renderRow={this.renderRow}
                />
            </Card>
        )
    }
}

const mapStateToProps = (state) => {
    const contactList = _.map(state.contactList, (val, uid) => {
        return { ...val, uid };
    })
    return {
        contactList: contactList
    }
}

export default connect(mapStateToProps, { contactsFetch })(ContactsList);