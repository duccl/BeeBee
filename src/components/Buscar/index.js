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
  SectionList,
  KeyboardAvoidingView,
  Alert
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import { Stitch, RemoteMongoClient } from "mongodb-stitch-react-native-sdk";

export default class Buscar extends Component{

  constructor(props){
    super(props)
    this.state = {
      placa:undefined,
      parker:undefined
    }
  }

  update_state(obj){
    let array = Object.values(obj)
    array.shift()
    this.setState({parker:array})
  }

  query_data(){
    const stitchAppClient = Stitch.defaultAppClient;
    const mongoClient = stitchAppClient.getServiceClient(
      RemoteMongoClient.factory,
      "mongodb-atlas"
    );
    const db = mongoClient.db("taskmanager");
    const parkers = db.collection("parkers");
    const docs = parkers.find({placa:this.state.placa})
      .asArray()
        .then(docs => docs.length === 0 ? Alert.alert('BeeBee',"Cliente não encontrado.") : docs.map(item => this.update_state(item)))
          .catch(e => alert(e))
    this.textInputPlaca.clear();
  }
  render() {
    return (
        <SafeAreaView style={styles.container}>

          <StatusBar backgroundColor='#DBA901' barStyle="light-content"></StatusBar>
          
          <ScrollView style={{paddingHorizontal: 10}}>
            <View style={{ flex: 1 }}>
              <View style={{ height: 80, justifyContent: 'center'}}>
                <Animatable.View animation='slideInDown' duration={1000} style={{ borderRadius: 5, height: 50, backgroundColor: '#DBA901', flexDirection: 'row', padding: 5, alignItems: 'center'}}>
                  <Image 
                    style={{width: 24, height: 24, position: "relative", marginLeft: 10, marginBottom: 4}}
                    source={require('../../../assets/buscaCarro.png')}
                  />
                  <TextInput ref = {textInputPlaca => this.textInputPlaca = textInputPlaca} placeholder='Digite a placa do seu veículo' style={{fontSize: 16, marginLeft: 10}} onChangeText={text => this.setState({placa:text})}/>
                </Animatable.View>
              </View>
            </View>

            <ScrollView style={styles.baseTelaDeDados}>
              <View style={{alignItems: 'flex-start', padding: 15}}>
                {this.state.parker && this.state.parker.map(item=> item && <Text style={styles.dados}>{item.toString()}</Text>)}
              </View>
            </ScrollView>
            
            {/* Cria o botão de cadastro */}
            <View style={{alignItems: 'center'}}>
                  <View style={styles.circle} onTouchEnd={_ => this.query_data()}>
                    <Image 
                      style={{width: 60, height: 60, marginTop: 6, marginLeft:10}}
                      source={require('../../../assets/buscaCarro.png')}
                    />
                  </View>
            </View>
          </ScrollView>
        </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  item:{
    padding: 20,
    marginVertical: 8,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#FACC2E"
  },
  circle: {
    backgroundColor: '#282928',
    borderRadius: 50,
    width: 80,
    height: 80,
    marginTop: 20,
    flexDirection: 'row',
    elevation: 5,
  },
  baseTelaDeDados: {
    backgroundColor: '#DBA901',
    height: 370,
    width: 340,
    borderRadius: 5,
  },
  dados: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 40,
    color: '#282928'
  }
});
