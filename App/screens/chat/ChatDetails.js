import React from 'react';
import {View, Text} from 'react-native';
import { Container, Header, Left, Button, Icon, Body, Title, Right, Content} from 'native-base';

export default class ChatDetails extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Details page'
    });
    render() {
        return (
            <Container>
                <Content padder>
                    <Text>Chat details page</Text>
                </Content>
            </Container>
        );
    }
}
