import { Image, StyleSheet, Platform, Button } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ThemedView style={styles.view1}>
      <ThemedView style={styles.view2}></ThemedView>
      <ThemedView style={styles.view3}>
        <ThemedView style={styles.view4}></ThemedView>
        <ThemedView style={styles.view5}>
          <ThemedView style={styles.view6}></ThemedView>
          <ThemedView style={styles.view7}>
            <Button title='Boton1'></Button>
            <Button title='Boton2'></Button>
            <Button title='Boton3'></Button>
          </ThemedView>
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  view1: {
    flex: 1,
    backgroundColor: "red",
    flexDirection: 'column'
  },
  view2: {
    flex: 1,
    backgroundColor: 'yellow'
  },
  view3: {
    flex: 2,
    backgroundColor: 'blue',
  },
  view4: {
    flex: 1,
    backgroundColor: 'purple'
  },
  view5: {
    flex: 1,
    backgroundColor: 'pink',
    flexDirection:'row'
  },
  view6: {
    flex: 1,
    backgroundColor: 'green',
    flexDirection:'row'
  },
  view7: {
    flex: 2,
    backgroundColor: 'grey',
    justifyContent: 'space-around'
  },
});
