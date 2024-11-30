import { Image, StyleSheet, Platform, Button, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
export default function HomeScreen() {
  return (
      <View style={styles.stepContainer}>
        <Button title='Comp 1'></Button>
        <Button title='Comp 2' color="gold" />
        <Button title='Comp 3'></Button>
        <StatusBar style='auto'></StatusBar>
      </View>
  );
}

const styles = StyleSheet.create({
  stepContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
