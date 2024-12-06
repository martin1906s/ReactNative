import { Image, StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Home } from '../../apps/screens/HomeScreen'
import { Contacts } from "../../apps/screens/ContactsScreens";
import {Productos} from '../../apps/screens/ProductosScreen'
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function Index() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='HomeNav' component={Home} />
      <Stack.Screen name='ContactsNav' component={Contacts} />
      <Stack.Screen name='ProductosNav' component={Productos}/>
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

});
