import React from 'react';
import { Container } from 'native-base';
import AppHeader from './App/components/AppHeader';
import AppBody from './App/components/AppBody';
import AppFooter from './App/components/AppFooter';

export default class App extends React.Component {
  render() {
    return (
        <Container>
            <AppHeader/>
            <AppBody/>
            <AppFooter/>
        </Container>
    );
  }
}
