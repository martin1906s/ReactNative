import { StyleSheet, FlatList, View } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

let persona = [
  { nombre: 'Juan', apellido: 'Perez', cedula: '1715614788' },
  { nombre: 'Martin', apellido: 'Simbaña', cedula: '1751013192' },
  { nombre: 'Elba', apellido: 'Zurita', cedula: '1234567890' }
]

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText>Hola</ThemedText>
      <FlatList
        style={styles.lista}
        data={persona}
        renderItem={(obj) => {
          return (
            <View style={styles.itemPersona}>
              <ThemedText>{obj.index + 1}.- {obj.item.nombre}</ThemedText>
              <ThemedText>{obj.item.cedula}</ThemedText>
            </View>
          )
        }}
        keyExtractor={(item)=>{return item.cedula}} />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightcoral',
    paddingHorizontal: 10
  },
  lista: {
    backgroundColor: 'lightgreen',
    borderRadius: 10
  },
  itemPersona:{
    backgroundColor: 'orchid',
    margin: 10,
    padding: 10
  }
});
