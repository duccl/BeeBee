import React, { useState, Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Animated,
  Image,
  Icon
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import { Stitch, AnonymousCredential } from "mongodb-stitch-react-native-sdk";

export default class Main extends Component{
  constructor(props) {
    super(props);
    this.state = {
      currentUserId: undefined,
      client: undefined,
      loaded:false
    };
    this._loadClient = this._loadClient.bind(this);
  }

  componentDidMount() {
    this._loadClient();
  }

  _loadClient() {
    Stitch.initializeDefaultAppClient("parkmanager-ypqep").then(client => {
      this.setState({ client });
      this.state.client.auth
        .loginWithCredential(new AnonymousCredential())
        .then(user => {
          console.log(`Successfully logged in as user ${user.id}`);
          this.setState({ currentUserId: user.id });
          this.setState({ currentUserId: client.auth.user.id });
          this.setState({loaded:true})
        })
        .catch(err => {
          console.log(`Failed to log in anonymously: ${err}`);
          this.setState({ currentUserId: undefined });
          this.setState({loaded:false})
          alert(err)
        });
    });
  }

  render() {
    return (
        <SafeAreaView style={styles.container}>

          <StatusBar backgroundColor="#DBA901" barStyle="light-content"></StatusBar>

          <Animatable.View animation='slideInDown' duration={800}>
            <Image 
              style={{width: 330, height: 100, marginBottom: 20}}
              source={require('../../../assets/homeIcon.png')}
            />
          </Animatable.View>
        
          <View style={styles.nameCards} onTouchEnd={_ => this.props.navigation.navigate('Cadastrar')}>
            <Text style={styles.cards}>Cadastrar</Text>
            <Image 
              style={{width: 50, height: 50, position: "absolute", marginLeft: 185, marginTop: 4}}
              source={require('../../../assets/cadastroCarro.png')}
            />
          </View>

          <View style={styles.nameCards} onTouchEnd={_ => this.props.navigation.navigate('Remover')}>
            <Text style={styles.cards}>Remover</Text>
            <Image 
              style={{width: 50, height: 50, position: "absolute", marginLeft: 185, marginTop: 4}}
              source={require('../../../assets/removeCarro.png')}
            />
          </View>

          <View style={styles.nameCards} onTouchEnd={_ => this.props.navigation.navigate('Buscar')}>
            <Text style={styles.cards}>Buscar</Text>
            <Image 
              style={{width: 48, height: 48, position: "absolute", marginLeft: 185, marginTop: 4}}
              source={require('../../../assets/buscaCarro.png')}
            />
          </View>

          <View style={styles.nameCards} onTouchEnd={_ => this.props.navigation.navigate('Listar')}>
            <Text style={styles.cards}>Listar</Text>
            <Image 
              style={{width: 48, height: 48, position: "absolute", marginLeft: 185, marginTop: 4}}
              source={require('../../../assets/listaCarro.png')}
            />
          </View>

          
        </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FACC2E"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    color: "#FFF",
    fontWeight: "bold"
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  button: {
    width: 300,
    justifyContent: "center"
  },
  cards: {
    color: '#FBE37B',
    fontSize: 30,
    marginTop: 8,
    marginLeft: 20,
    fontFamily: 'Montserrat-Regular',

  },
  nameCards: {
    backgroundColor: '#282928',
    borderRadius: 13,
    width: 250,
    height: 60,
    marginTop: 20,
    flexDirection: 'row',
  }
});
