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

  constructor(props){
    super(props)
    this.state = {
      placa:undefined,
      parker:undefined
    }
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

          <StatusBar backgroundColor="#DBA901" barStyle="light-content"></StatusBar>
        
          <View style={{paddingHorizontal: 10}}>
            <View style={{padding: 10}}>
              <Text style={{fontFamily: 'Montserrat-SemiBold', fontSize: 20, color: '#282928'}}>Abaixo encontram-se todos os clientes cadastrados:</Text>
            </View>

            <ScrollView style={styles.baseTelaDeDados}></ScrollView>

            <View>
              <Text></Text>
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
    alignItems: "center",
    backgroundColor: "#FACC2E"
  },
  baseTelaDeDados: {
    backgroundColor: '#DBA901',
    width: 340,
    borderRadius: 10
  }
});
