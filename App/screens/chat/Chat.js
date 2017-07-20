import React from 'react';
import {View, Text} from 'react-native';
import { Container, Header, Left, Button, Icon, Body, Title, Right, Content} from 'native-base';
import { StackNavigator } from "react-navigation";
import ChatDetails from './ChatDetails';

export default class AppChat extends React.Component {
    render() {
        return (
            <Container>
                <Content padder>
                    <Button
                        full
                        rounded
                        primary
                        style={{ marginTop: 10 }}
                        onPress={() => this.props.navigation.navigate("ChatDetails")}
                    >
                        <Text>Goto details screen</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}
AppChat.navigationOptions = ({ navigation }) => ({
    header: (
        <Header>
            <Left>
                <Button transparent onPress={() => navigation.navigate("DrawerOpen")}>
                    <Icon name="menu" />
                </Button>
            </Left>
            <Body>
            <Title>Chat</Title>
            </Body>
            <Right />
        </Header>
    )
});