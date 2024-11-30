import { Image, StyleSheet, Platform, Button } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ThemedView style={styles.view1}>
      <ThemedView style={styles.view2}>
        <Button title='X'></Button>
        <Button title='y'></Button>
        <Button title='z'></Button>
      </ThemedView>
      <ThemedView style={styles.view3}>
        <ThemedView style={styles.view5}>
          <ThemedView style={styles.view7}>
            <Button title='BOTON 1'></Button>
            <Button title='BOTON 2'></Button>
          </ThemedView>
          <ThemedView style={styles.view8}>
            <Button title='OPERACION 1'></Button>
            <Button title='OPERACION 2'></Button>
            <Button title='OPERACION 3'></Button>
          </ThemedView>
        </ThemedView>
        <ThemedView style={styles.view6}>
          <Button title='ACCION 1'></Button>
          <Button title='ACCION 2'></Button>
        </ThemedView>
      </ThemedView>
      <ThemedView style={styles.view4}>
        <Button title='BOTON FINAL'></Button>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  view1: {
    flex: 1,
    backgroundColor: 'red'
  },
  view2: {
    flex: 1,
    backgroundColor: 'cyan',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  view3: {
    flex: 6,
    backgroundColor: 'greenyellow'
  },
  view4: {
    flex: 1,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  view5: {
    flex: 4,
    backgroundColor: 'pink',
    flexDirection: 'row',
    marginHorizontal: 1
  },
  view6: {
    flex: 1,
    backgroundColor: 'blue',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  view7: {
    flex: 1,
    backgroundColor: 'yellow',
    justifyContent: 'space-around'
  },
  view8: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
});
