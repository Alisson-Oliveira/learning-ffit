import React from "react";
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import { ListPhones } from "../components/ListPhones";

export function Home() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Tecnologia Bluetooth</Text>
      <Text>
        Bluetooth é uma especificação de rede sem fio de âmbito pessoal (Wireless personal area networks – PANs) consideradas do tipo PAN ou mesmo WPAN. O Bluetooth provê uma maneira de conectar e trocar informações entre dispositivos como telefones celulares, notebooks, computadores, impressoras, câmeras digitais e consoles de videogames digitais através de uma frequência de rádio de curto alcance globalmente licenciada e segura. As especificações do Bluetooth foram desenvolvidas e licenciadas pelo "Bluetooth Special Interest Group". A tecnologia Bluetooth diferencia-se da tecnologia IrDA inclusive pelo tipo de radiação eletromagnética utilizada.
      </Text> 
      
      <ListPhones /> 
      
      <Text style={styles.footer}>Processo Seletivo [2º Etapa]</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 32,
    paddingHorizontal: 24
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20
  },

  footer: {
    textAlign: 'center',
    padding: 32
  }
});