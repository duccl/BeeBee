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
  TextInput,
  KeyboardAvoidingView,
  Alert
} from 'react-native';
import { Stitch, RemoteMongoClient } from "mongodb-stitch-react-native-sdk";

export default class Cadastrar extends Component{
  constructor(props){
    super(props);
    this.state = {
      nome: undefined,
      telefone: undefined,
      placa: undefined,
      tipo: undefined,
      modelo: undefined
    };
  }

  insert(){
    const stitchAppClient = Stitch.defaultAppClient;
    const mongoClient = stitchAppClient.getServiceClient(
      RemoteMongoClient.factory,
      "mongodb-atlas"
    );
    const db = mongoClient.db("taskmanager");
    const parkers = db.collection("parkers");

    parkers.insertOne({
          nome: this.state.nome,
          telefone: this.state.telefone,
          placa:this.state.placa,
          tipo:this.state.tipo,
          modelo:this.state.modelo,
          date: new Date().toLocaleDateString()
        }
      ).catch(error => {
        console.log("erro")
        alert(error.message);
        return;
    })

    Alert.alert('BeeBee','Cadastro realizado com sucesso!');
    this.textInputContato.clear();
    this.textInputNome.clear();
    this.textInputPlaca.clear();
    this.textInputTipo.clear();
    this.textInputModelo.clear();
  }

  render() {
    return (
        <SafeAreaView style={styles.container}>

          <StatusBar backgroundColor="#DBA901" barStyle="light-content"></StatusBar>
          
          <ScrollView>

            <View style={{padding: 15}}>
              <Text style={{fontFamily: 'Montserrat-SemiBold', fontSize: 20, color: '#282928'}}>Preencha os campos abaixo e pressione o botão para finalizar seu cadastro:</Text>
            </View>

            {/* Cria a caixa de texto do Nome */}
            <View style={{ flex: 2 }}>
              <View style={{ height: 80, paddingHorizontal: 17, justifyContent: 'center'}}>
                <Text style={styles.titles}>Nome do proprietário</Text>
                <View style={{ borderRadius: 5, height: 50, backgroundColor: '#DBA901', flexDirection: 'row', padding: 5, alignItems: 'center'}}>
                  <TextInput ref={input => { this.textInputNome = input }} placeholder='Ex: João' style={{fontSize: 16, marginLeft: 10}} onChangeText={(text) => this.setState({nome:text})}/>
                </View>
              </View>
            </View>

            {/* Cria a caixa de texto do Telefone */}
            <View style={{ flex: 2 }}>
              <View style={{ height: 80, paddingHorizontal: 17, justifyContent: 'center'}}>
                <Text style={styles.titles}>Telefone</Text>
                <View style={{ borderRadius: 5, height: 50, backgroundColor: '#DBA901', flexDirection: 'row', padding: 5, alignItems: 'center'}}>
                  <TextInput ref={input => { this.textInputContato = input }} placeholder='Ex: (DDD) 98765-4321' style={{fontSize: 16, marginLeft: 10}} onChangeText={(text) => this.setState({telefone:text})}/>
                </View>
              </View>
            </View>

            {/* Cria a caixa de texto do Placa */}
            <View style={{ flex: 2 }}>
              <View style={{ height: 80, paddingHorizontal: 17, justifyContent: 'center'}}>
                <Text style={styles.titles}>Placa do veículo</Text>
                <View style={{ borderRadius: 5, height: 50, backgroundColor: '#DBA901', flexDirection: 'row', padding: 5, alignItems: 'center'}}>
                  <TextInput ref={input => { this.textInputPlaca = input }} placeholder='Ex: MGE-1010' style={{fontSize: 16, marginLeft: 10}} onChangeText={(text) => this.setState({placa:text})}/>
                </View>
              </View>
            </View>

            {/* Cria a caixa de texto do tipo do veículo */}
            <View style={{ flex: 2 }}>
              <View style={{ height: 80, paddingHorizontal: 17, justifyContent: 'center'}}>
                <Text style={styles.titles}>Tipo do veículo</Text>
                <View style={{ borderRadius: 5, height: 50, backgroundColor: '#DBA901', flexDirection: 'row', padding: 5, alignItems: 'center'}}>
                  <TextInput ref={input => { this.textInputTipo = input }} placeholder='Ex: Moto ou Carro' style={{fontSize: 16, marginLeft: 10}} onChangeText={(text) => this.setState({tipo:text})}/>
                </View>
              </View>
            </View>

            {/* Cria a caixa de texto do Modelo */}
            <View style={{ flex: 3 }}>
              <View style={{ height: 80, paddingHorizontal: 17, justifyContent: 'center'}}>
                <Text style={styles.titles}>Modelo do veículo</Text>
                <View style={{ borderRadius: 5, height: 50, backgroundColor: '#DBA901', flexDirection: 'row', padding: 5, alignItems: 'center'}}>
                  <TextInput ref={input => { this.textInputModelo = input }} placeholder='Ex: Fusion' style={{fontSize: 16, marginLeft: 10}} onChangeText={(text) => this.setState({modelo:text})}/>
                </View>
              </View>
            </View>


          {/* Cria o botão de cadastro */}
          <View style={{alignItems: 'center'}}>
              <View style={styles.circle} onTouchEnd={this.insert.bind(this)}>
              <Image 
                  style={{width: 60, height: 60, marginTop: 6, marginLeft:10}}
                  source={require('../../../assets/cadastroCarro.png')}
                />
              </View>
            </View>

            <View>
              <Text></Text>
            </View>
          </ScrollView>

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
  button: {
    width: 300,
    justifyContent: "center"
  },
  titles: {
    color: '#282928',
    fontSize: 18,
    fontFamily: 'Montserrat-SemiBold',
  },
  circle: {
    backgroundColor: '#282928',
    borderRadius: 50,
    width: 80,
    height: 80,
    marginTop: 17,
    flexDirection: 'row',
    elevation: 5,
  }
});
