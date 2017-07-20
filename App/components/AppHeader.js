import React, { Component } from 'react';
import { Header, Title, Container, Body, Left, Icon, Button, Right} from 'native-base';

export default class AppHeader extends Component {

    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button onPress={this.props.open} transparent>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Project Header</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name='microphone' />
                        </Button>
                    </Right>
                </Header>
            </Container>
        );
    }
}
