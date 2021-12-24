import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from "@react-navigation/native";
import { Phone, PhoneProps } from "../components/Phone";

type Params = {
  data: PhoneProps
}

export function Details() {
  const { goBack } = useNavigation();

  const data = useRoute();
  const params = data.params as Params;

  return (
    <View style={{ flex: 1, marginTop: 32, padding: 24 }}>
      <TouchableOpacity onPress={goBack}>
        <Text>Voltar</Text>
      </TouchableOpacity>
      <Phone data={params.data}/>
    </View>
  )
}