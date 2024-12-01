import { Button, StyleSheet, TextInput } from 'react-native';

import { useState } from 'react';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");

  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.titulo}>Hola</ThemedText>
      <TextInput value={nombre} style={styles.caja} onChangeText={setNombre} placeholder='Nombre'></TextInput>
      <TextInput value={apellido} style={styles.caja} onChangeText={setApellido} placeholder='Apellido'></TextInput>
      <Button title='Holaaaaaaa'></Button>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 10
  },
  caja: {
    borderColor: 'grey',
    borderWidth: 1,
    padding: 20,
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  titulo: {
    color: 'red',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign:'center'
  }
});
