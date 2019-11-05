import React, { useState, Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Button,
  TextInput
} from 'react-native';

export default class Cadastrar extends Component{
  constructor(props){
    super(props);
    this.state = {
      nome:undefined,
      placa:undefined,
      CPF:undefined,
      dataEntrada:undefined,
      dataSaida:undefined,
      contato:undefined
    };
    this.placeholders = ["Nome","Placa","CPF","Contato"]
  }

  render() {
    return (
        <SafeAreaView style={styles.coluna}>
          <StatusBar backgroundColor="#DBA901" barStyle="light-content"></StatusBar>
          {this.placeholders.map((valor,chave) => <TextInput placeholder={valor} 
                                                                   key={chave} 
                                                                   style={styles.linha}
                                                                   onChangeText={(text) => this.setState({nome: text})}/>)}
          <Button title={"Cadastrar"} onPress={alert.bind(this,this.state)}/>
        </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  linha: {
    flexDirection:"row",
    backgroundColor: "#FACC2E",
    margin:10
  },
  coluna:{  
    flex:1,
    flexDirection:"column",
    justifyContent: "space-between",
  }
});
