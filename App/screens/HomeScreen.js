import React from 'react';
import {View, Text} from 'react-native';
import { Container, Header, Left, Button, Icon, Body, Title, Right, Content} from 'native-base';

let stream_url = "https://api.soundcloud.com/tracks/191477804";

export default class HomeScreen extends React.Component {

    componentDidMount() {
    }

    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.navigate("DrawerOpen")}
                        >
                            <Icon name="menu" />
                        </Button>
                    </Left>
                    <Body>
                    <Title>HomeScreen</Title>
                    </Body>
                    <Right />
                </Header>
                <Content padder>
                    <Text>Home page</Text>
                </Content>
            </Container>
        );
    }
}
