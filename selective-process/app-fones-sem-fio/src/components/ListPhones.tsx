import React from 'react';
import { View } from 'react-native';
import { Phone } from './Phone';

import { phones } from '../database/phones';

export function ListPhones() { 
  return (
    <View>
      {
        phones.map((phone, index) => (
          <Phone 
            key={index}
            data={phone}
          />
        ))
      }
    </View>
  )
}