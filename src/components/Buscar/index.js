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
  TouchableHighlight,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';

import * as Animatable from 'react-native-animatable';

export default class Buscar extends Component{
  render() {
    return (
        <SafeAreaView style={styles.container}>

          <StatusBar backgroundColor='#DBA901' barStyle="light-content"></StatusBar>
          
          <View style={{ flex: 1 }}>
            <View style={{ height: 80, paddingHorizontal: 17, justifyContent: 'center'}}>
              <Animatable.View animation='slideInDown' duration={1000} style={{ borderRadius: 20, height: 50, backgroundColor: '#DBA901', flexDirection: 'row', padding: 5, alignItems: 'center'}}>
                <Image 
                  style={{width: 24, height: 24, position: "relative", marginLeft: 10}}
                  source={require('../../../assets/lupa.png')}
                />
                <TextInput placeholder='Encontre seu veículo' style={{fontSize: 16, marginLeft: 10}}/>
              </Animatable.View>
            </View>
          </View>

        </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
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
    marginTop: 12,
    fontFamily: 'Montserrat-Regular',

  },
  nameCards: {
    backgroundColor: '#282928',
    borderRadius: 20,
    width: 200,
    height: 70,
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  }
});
