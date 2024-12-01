import { Button, StyleSheet, TextInput } from 'react-native';

import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { useState } from 'react';

export default function HomeScreen() {
  const [estatura, setEstatura]=useState("");
  const [peso, setPeso]=useState("");
  const [res, setRes]=useState("")
  const [resultado, setResultado]=useState(NaN);
  let estaturaInt= parseInt(estatura);
  estaturaInt=estaturaInt/100;
  let pesoInt= parseInt(peso);

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.viewPrinc}>
        <ThemedText style={styles.text} >Calculadora IMC</ThemedText>
      </ThemedView>
      <ThemedView style={styles.viewBody}>
        <ThemedText style={styles.text} >Estatura cm</ThemedText>
        <TextInput placeholder='ej. 170' style={styles.caja} onChangeText={(cm)=>{
          setEstatura(cm);
        }}></TextInput>
        <ThemedText style={styles.text}>Peso kg</ThemedText>
        <TextInput placeholder='ej. 75' style={styles.caja} onChangeText={(kg)=>{
          setPeso(kg);
        }}></TextInput>
        <Button title='CALACULAR' color={'#ffc8dd'} onPress={()=>{
          const operacion=pesoInt/(estaturaInt*estaturaInt);
          setResultado(operacion);
          if (operacion<18.5) {
            setRes("Inferior");
          }
          if (operacion>=18.5 && operacion<=24.9) {
            setRes("Normal");
          }
          if (operacion>24.9 && operacion<=29.9) {
            setRes("Superior");
          }
          if (operacion>=30) {
            setRes("Obeso");
          }
          if (isNaN(operacion)) {
            setRes("");
          }
        }}></Button>
      </ThemedView>
      <ThemedView style={styles.viewRes}>
        <ThemedText style={styles.text}>IMC: {resultado.toFixed(2)}</ThemedText>
        <ThemedText style={styles.text}>{res}</ThemedText>
      </ThemedView>
      <ThemedView style={styles.viewPie}>
        <ThemedView style={styles.viewPie1}>
          <ThemedText style={styles.text}>PESO</ThemedText>
          <ThemedText style={styles.datosPeso}>Inferior</ThemedText>
          <ThemedText style={styles.datosPeso}>Normal</ThemedText>
          <ThemedText style={styles.datosPeso}>Superior</ThemedText>
          <ThemedText style={styles.datosPeso}>Obeso</ThemedText>
        </ThemedView>
        <ThemedView style={styles.viewPie2}>
        <ThemedText  style={styles.text}>IMC</ThemedText>
          <ThemedText style={styles.datosPeso}>Menos de 18.5</ThemedText>
          <ThemedText style={styles.datosPeso}>18.5 – 24.9</ThemedText>
          <ThemedText style={styles.datosPeso}>25.0 – 29.9</ThemedText>
          <ThemedText style={styles.datosPeso}>Más de 30.0</ThemedText> 
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10
  },
  text: {
    textAlign: 'center',
    fontSize: 25
  },
  caja: {
    borderWidth: 5,
    borderColor: 'white',
    borderRadius: 20,
    margin: 15,
    textAlign: 'center',
    fontSize: 15
  },
  add: {
    backgroundColor: '#ffc8dd'
  },
  viewPrinc: {
    flex: 0.7,
    justifyContent: 'center',
    paddingVertical: 15,
    backgroundColor: '#ff686b',
    marginVertical: 5,
    borderRadius: 10,
    paddingHorizontal: 5
  },
  viewBody: {
    flex: 3,
    paddingVertical: 15,
    backgroundColor: '#ff686b',
    marginVertical: 5,
    borderRadius: 10,
    paddingHorizontal: 15
  },
  viewRes: {
    flex: 0.6,
    paddingVertical: 15,
    backgroundColor: '#ff686b',
    marginVertical: 5,
    borderRadius: 10,
    paddingHorizontal: 15
  },
  viewPie: {
    flex: 3,
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingVertical: 15,
    borderRadius: 10,
  },
  viewPie1: {
    flex: 3,
    backgroundColor: '#ff686b',
    paddingVertical: 15,
    marginRight: 2.5,
    borderRadius: 10,
    paddingHorizontal: 15
  },
  viewPie2: {
    flex: 3,
    backgroundColor: '#ff686b',
    paddingVertical: 15,
    marginLeft: 2.5,
    borderRadius: 10,
    paddingHorizontal: 15
  },
  datosPeso:{
    marginVertical: 10,
    textAlign: 'center'
  }
});
