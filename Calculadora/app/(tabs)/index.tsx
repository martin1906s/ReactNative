import { Image, StyleSheet, Platform, TextInput, Button } from 'react-native';
import { useState } from 'react';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  const [numero1, setNumero1] = useState("");
  const [numero2, setNumero2] = useState("");
  const [operacion, setOperacion] = useState(NaN);
  const entero1 = parseInt(numero1);
  const entero2 = parseInt(numero2);
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
        <ThemedText type="title">Calculadora</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText>Ingrese Valor 1</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <TextInput style={styles.cajaTexto} value={numero1} onChangeText={(v1) => {
          setNumero1(v1);
        }} />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText>Ingrese Valor 2</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <TextInput style={styles.cajaTexto} value={numero2} onChangeText={(v2) => {
          setNumero2(v2);
        }} />
        <ThemedText>Resultado: {operacion}</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <Button title='Sumar' onPress={()=>{
          const suma=entero1+entero2;
          setOperacion(suma);
        }}/>
        <Button title='Restar' onPress={()=>{
          const resta=entero1-entero2;
          setOperacion(resta);
        }}/>
        <Button title='Multiplicar' onPress={()=>{
          const multi=entero1*entero2;
          setOperacion(multi);
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
    color: 'red',
    backgroundColor: 'yellow',
    borderColor: 'red',
    borderRadius: 20,
    borderWidth: 10,
    paddingHorizontal: 5,
  },
});
