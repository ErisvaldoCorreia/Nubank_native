import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>
        Olá Mundo React Native
      </Text>
      <Text style={styles.texto}>
        Eu serei um estudo clone!
      </Text>
      <Text>
        Nubank Interface
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    color: '#cc5ffa',
    fontSize: 20,
  }
});
