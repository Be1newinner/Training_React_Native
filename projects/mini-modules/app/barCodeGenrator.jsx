import React from 'react';
import { View } from 'react-native';
import { Barcode } from 'expo-barcode-scanner';

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Barcode
        value="123456789999"
        options={{ format: 'UPC', background: 'lightblue' }}
        rotation={-5}
      />
    </View>
  );
}