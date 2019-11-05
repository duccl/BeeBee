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
  Icon,
} from 'react-native';

import * as Animatable from 'react-native-animatable';


export default class Main extends Component{
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
          </View>

          <View style={styles.nameCards} onTouchEnd={_ => this.props.navigation.navigate('Remover')}>
            <Text style={styles.cards}>Remover</Text>
          </View>

          <View style={styles.nameCards} onTouchEnd={_ => this.props.navigation.navigate('Buscar')}>
            <Text style={styles.cards}>Buscar</Text>
          </View>

          <View style={styles.nameCards} onTouchEnd={_ => this.props.navigation.navigate('Listar')}>
            <Text style={styles.cards}>Listar</Text>
          </View>

          {/* <Image 
              style={{width: 50, height: 50, position: "absolute"}}
              source={require('../../../assets/cadastroCarro.png')}
          /> */}
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
    marginTop: 15,
    marginLeft: 20,
    fontFamily: 'Montserrat-Regular',

  },
  nameCards: {
    backgroundColor: '#282928',
    borderRadius: 20,
    width: 300,
    height: 70,
    marginTop: 10,
    flexDirection: 'row',
  }
});
