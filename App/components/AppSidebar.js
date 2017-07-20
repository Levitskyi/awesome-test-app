import React, { Component } from 'react';
import { Text } from 'react-native';
import { Header, Title, Container, Content, List, ListItem, Button} from 'native-base';

export default class AppSidebar extends Component {

    render() {
        return (
            <Container style={{backgroundColor: '#fff'}}>
                <Content>
                    <List>
                        <ListItem>
                            <Button onPress={() => this.props.navigation.navigate('Home')}>
                                <Text>Home</Text>
                            </Button>
                        </ListItem>
                        <ListItem>
                            <Button onPress={() => this.props.navigation.navigate('Chat')}>
                                <Text>Chat</Text>
                            </Button>
                        </ListItem>
                        <ListItem>
                            <Button onPress={() => this.props.navigation.navigate('Search')}>
                                <Text>Search</Text>
                            </Button>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        );
    }
}
