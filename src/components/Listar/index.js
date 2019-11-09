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
import { Card } from 'react-native-paper';
import { Stitch, RemoteMongoClient } from "mongodb-stitch-react-native-sdk";

export default class Listar extends Component {

  constructor(props) {
    super(props)
    this.state = {
      placa: undefined,
      docs: undefined
    }
  }

  componentWillMount() { this.query_data(); }

  async query_data() {
    const stitchAppClient = Stitch.defaultAppClient;
    const mongoClient = stitchAppClient.getServiceClient(
      RemoteMongoClient.factory, "mongodb-atlas"
    );
    const collection = mongoClient.db("taskmanager").collection("parkers");

    const docs = await collection.find({}).toArray()
      //.then(docs => this.setState({ docs }))
      .catch(err => alert(err.message))
    docs.sort((a, b) => {
      return new Date(a.date) - new Date(b.date)
    })
    this.setState({ docs });
  }

  card(valor) {
    return (
      <View style={{ padding: 10 }}>
        <Card style={{ padding: 10, backgroundColor: '#DBA900' }}>
          <Text style={styles.dados}>{valor.nome}</Text>
          <Text style={styles.dados}>{valor.telefone}</Text>
          <Text style={styles.dados}>{valor.placa}</Text>
          <Text style={styles.dados}>{valor.tipo}</Text>
          <Text style={styles.dados}>{valor.modelo}</Text>
          <Text style={styles.dados}>{valor.date.toLocaleString()}</Text>
        </Card>
      </View>
    )
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>

        <StatusBar backgroundColor="#DBA901" barStyle="light-content"></StatusBar>

        <View style={{ paddingHorizontal: 10 }}>
          <View style={{ padding: 10 }}>
            <Text style={{ fontFamily: 'Montserrat-SemiBold', fontSize: 20, color: '#282928' }}>Abaixo encontram-se todos os clientes cadastrados:</Text>
          </View>

          <ScrollView style={styles.baseTelaDeDados}>
            {this.state.docs && this.state.docs.map(valor => this.card(valor))}
          </ScrollView>

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
    backgroundColor: '#282928',
    width: 340,
    borderRadius: 10
  },
  dados: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 15,
    color: '#282928'
  }
});
