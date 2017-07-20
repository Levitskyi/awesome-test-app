// import React from 'react';
// import { Container } from 'native-base';
import AppHeader from './App/components/AppHeader';
import AppBody from './App/components/AppBody';
import AppFooter from './App/components/AppFooter';
//
// export default class App extends React.Component {
//   render() {
//     return (
//         <Container>
//             <AppHeader/>
//             <AppBody/>
//             <AppFooter/>
//         </Container>
//     );
//   }
// }

// import React from 'react';
import {
    Text,
    Button,
    View
} from 'react-native';
// import { StackNavigator } from 'react-navigation';
// import AppChat from './App/screens/Chat'
// import { Drawer, Container } from 'native-base';
// import AppSidebar from './App/components/AppSidebar'
//
// class HomeScreen extends React.Component {
//     static navigationOptions = {
//         header: null,
//     };
//     render() {
//         const { navigate } = this.props.navigation;
//         closeDrawer = () => {
//             this.drawer._root.close()
//         };
//         openDrawer = () => {
//             this.drawer._root.open()
//         };
//         return (
//             <Drawer
//                 ref={(ref) => { this.drawer = ref; }}
//                 content={<AppSidebar navigator={this.props.navigation} />}
//                 onClose={() => closeDrawer()} >
//                 <Container>
//                     <AppHeader open={openDrawer}/>
//                     <AppBody/>
//                     <AppFooter/>
//                 </Container>
//             </Drawer>
//         );
//     }
// }
//
// const SimpleApp = StackNavigator({
//     Home: { screen: HomeScreen },
//     Chat: { screen: AppChat }
// });
//
// export default SimpleApp

import React  from "react";
import AppSidebar from "./App/components/AppSidebar";
import Chat from "./App/screens/chat/index";
import HomeScreen from "./App/screens/HomeScreen";
import Search from "./App/screens/Search";
import { DrawerNavigator } from "react-navigation";

const HomeScreenRouter = DrawerNavigator(
    {
        Home: { screen: HomeScreen },
        Chat: { screen: Chat },
        Search: { screen: Search }
    },
    {
        contentComponent: props => <AppSidebar {...props} />
    }
);
export default HomeScreenRouter;