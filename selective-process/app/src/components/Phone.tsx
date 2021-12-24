import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export type PhoneProps = {
  id: number,
  name: string,
  brand: string,
  url: any, 
  cost: string,
  color?: string,
  connections?: string,
  connectorType?: string,
  productWeight?: string,
  productDimensions?: string 
}

type Props = {
  data: PhoneProps
  seeMore?: boolean
}

export function Phone({ data }: Props) {
  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <Image source={data.url} style={styles.image}/>
      <Text style={styles.name}>{data.name}</Text>
      <View style={styles.containerCostBrand}>
        <Text>Por: <Text style={styles.textBold}>{data.cost}</Text></Text>
        <Text>Marca: <Text style={styles.textBold}>{data.brand}</Text></Text> 
      </View>
      <TouchableOpacity 
        style={styles.seeMore} 
        onPress={() => navigate('Details' as never, { data } as never)} 
      >
        <Text>Ver mais</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20, 
    alignItems: 'center'
  },

  image: {
    width: 256, 
    height: 256, 
    borderRadius: 12, 
    marginBottom: 12
  },

  name: {
    textAlign: 'center', 
    fontSize: 18, 
    fontWeight: 'bold'
  },

  containerCostBrand: {
    width: 256, 
    marginVertical: 12, 
    flexDirection: 'row', 
    justifyContent: 'space-between'
  },

  textBold: {
    fontSize: 16, 
    fontWeight: 'bold'
  },

  seeMore: {
    borderWidth: 1, 
    paddingHorizontal: 24, 
    paddingVertical: 14, 
    borderRadius: 12
  }
});