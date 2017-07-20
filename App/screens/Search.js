import React from 'react';
// import { Text } from 'react-native';
import { Container, Header, Left, Button, Icon, Body, Title, Right, Content, List, ListItem, Thumbnail, Text} from 'native-base';


export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
    }

    componentDidMount() {
        const data = {
            kind: 'top',
            genre: 'soundcloud:genres:all-music',
            limit: '50',
            linked_partitioning: '1',
            client_id: '2t9loNQH90kzJcsFCODdigxfp325aq4z',
        };
        let str = '';
        for(let key in data){
            str += key + '=' + data[key] + '&';
        }
        const newStr = str.substring(0, str.length -1);



        let response_url = 'https://api-v2.soundcloud.com/charts?' + newStr;

        // // const url = 'https://api.soundcloud.com/tracks?client_id=2t9loNQH90kzJcsFCODdigxfp325aq4z';
        return fetch(response_url)
            .then((response) => response.json())
            .then((responseJson) => {
                // let ds = new ListItem.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
                this.setState({
                    isLoading: false,
                    dataSource: responseJson
                });
                console.log(responseJson.collection[0].track);
                return responseJson.collection;
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {

        if(this.state.isLoading) {
            return (
                <Container>
                    <Content padder>
                        <Text>Loading....</Text>
                    </Content>
                </Container>
            );
        }
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
                    <Title>Search</Title>
                    </Body>
                    <Right />
                </Header>
                <Content padder>
                    {/*<List>*/}
                        {/*<ListItem dataSource={this.state.dataSource}*/}
                                  {/*renderRow={(rowData) => <Text>{rowData.title}, {rowData.releaseYear}</Text>} />*/}
                    {/*</List>*/}
                        {/*<ListView*/}
                            {/*dataSource={this.state.dataSource}*/}
                            {/*renderRow={(rowData) => <Text>{rowData.title}, {rowData.releaseYear}</Text>}*/}
                        {/*/>*/}
                    {/*<list*/}
                        {/*dataArray={this.state.dataSource.collection}*/}
                        {/*renderRow={(item) =>*/}
                           {/*<ListItem>*/}
                               {/*<Text>{item.track.title}</Text>*/}
                           {/*</ListItem>*/}
                       {/*}>*/}
                    {/*</list>*/}
                    <List
                        dataArray={this.state.dataSource.collection}
                        renderRow={(data) =>
                            <ListItem avatar>
                                <Left>
                                    <Thumbnail square size={80} source={{uri: data.track.artwork_url || ''}} />
                                </Left>
                                <Body>
                                <Text>{data.track.title}</Text>
                                <Text note>{data.track.description}</Text>
                                </Body>
                                <Right>
                                    <Text note>{data.track.duration}</Text>
                                </Right>
                            </ListItem>
                    }>
                    </List>
                </Content>
            </Container>
        );
    }
}

{/*<ListItem avatar>*/}
{/*<Left>*/}
{/*<Thumbnail source={{ uri: data.track.artwork_url }} />*/}
{/*</Left>*/}
{/*<Body>*/}
{/*<Text>{data.track.title}</Text>*/}
{/*<Text note>{data.track.description}</Text>*/}
{/*</Body>*/}
{/*<Right>*/}
{/*<Text note>{data.track.duration}</Text>*/}
{/*</Right>*/}
{/*</ListItem>*/}
