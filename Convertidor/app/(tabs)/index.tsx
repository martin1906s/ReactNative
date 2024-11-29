import { Image, StyleSheet, Platform, TextInput, Button } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useState } from 'react';

export default function HomeScreen() {
  const [cantidad, setConvertidor] = useState("");
  const [operacion, setOperacion] = useState(NaN);
  const cantidadEntera = parseInt(cantidad);
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Convertidor 🔄</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText>Cantidad USD</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <TextInput style={styles.cajaTexto} value={cantidad} onChangeText={(cant) => {
          setConvertidor(cant);
        }} />
        <ThemedText>Resultado: {operacion}</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <Button title='Pesos Mexicanos' color={'red'} onPress={()=>{
          const PX=cantidadEntera*20.38;
          setOperacion(PX);
        }}/>
        <Button title='Pesos Colombianos' color={'red'} onPress={()=>{
          const PCO=cantidadEntera*4374.73;
          setOperacion(PCO);
        }}/>
        <Button title='Euros' color={'red'} onPress={()=>{
          const EU=cantidadEntera*0.95;
          setOperacion(EU);
        }}/>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 250,
    width: 400,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  cajaTexto: {
    fontSize: 20,
    color: 'white',
    backgroundColor: 'black',
    borderColor: 'red',
    borderRadius: 20,
    borderWidth: 10,
    padding: 10,
  },
});
