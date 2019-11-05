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
} from 'react-native';

export default class Listar extends Component{
  render() {
    return (
        <SafeAreaView style={styles.container}>

          <StatusBar backgroundColor="#DBA901" barStyle="light-content"></StatusBar>
        
          <View>
              <Text>Listar</Text>
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
