import 'react-native-gesture-handler'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer'
import Ionicons from 'react-native-vector-icons/Ionicons';



const Drawer = createDrawerNavigator();

function ListaProductos() {
  const [productos] = useState([
    { nombre: "Agua Ardiente", categoría: "Alcohol", precioVenta: 3.45, id: 100 },
    { nombre: "Blue Label", categoría: "Elixir", precioVenta: 10.25, id: 101 },
    { nombre: "Coca-Cola", categoría: "Bebidas", precioVenta: 1.0, id: 102 },
    { nombre: "Canelazo", categoría: "Alcohol", precioVenta: 2.5, id: 103 },
    { nombre: "Salticas", categoría: "Galletas", precioVenta: 0.75, id: 104 },
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista Productos</Text>
      <FlatList
        data={productos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.productRow}>
            <Text style={styles.productColumnID}>{item.id}</Text>
            <Text style={styles.productColumnName}>
              {item.nombre} ({item.categoría})
            </Text>
            <Text style={styles.productColumnMoney}>
              USD {item.precioVenta.toFixed(2)}
            </Text>
          </View>
        )}
      />
      <StatusBar style="auto" />
    </View>
  );
}
function EjemploTabs() {
  const [contenido, setContenido] = useState("Contenido A");

  return (
    <View style={styles.containerEjemploTabs}>
      <Text style={styles.contenido}>{contenido}</Text>
      <View style={styles.botones}>
        <TouchableOpacity
          style={styles.boton}
          onPress={() => setContenido("Contenido A")}
        >
          <Ionicons name="bonfire" size={24} color="black" />
          <Text style={styles.textoBoton}>Configuración</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.boton}
          onPress={() => setContenido("Contenido B")}
        >
          <Ionicons name="beer-outline" size={24} color="black" />
          <Text style={styles.textoBoton}>Acerca de</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default function App() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: 'darkviolet',
          width: 240,
          borderColor: 'indigo',
          borderWidth: 4
        },
        headerStyle: {
          backgroundColor: 'indigo',
        },
        headerTintColor: 'white',
        headerTitleAlign: 'center',
        drawerActiveTintColor: 'black',
        drawerActiveBackgroundColor: 'greenyellow',
        drawerLabelStyle: { fontSize: 16 },
      }}
    >
      <Drawer.Screen
        name="Productos"
        component={ListaProductos}
        options={{ title: "Lista de Productos" }}
      />
      <Drawer.Screen
        name="Ejemplo Tabs"
        component={EjemploTabs}
        options={{ title: "Ejemplo Tabs" }}
      />
      <Drawer.Screen
        name="Finalizar Sesión"
        component={ListaProductos}
        options={{ title: "Finalizar Sesión" }}
      />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: 'center',
  },
  productRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    padding: 10,
    backgroundColor: "blueviolet",
    borderRadius: 8,
    borderColor: 'indigo',
    borderWidth: 4
  },
  productColumnID: {
    flex: 0.9,
    backgroundColor: 'chartreuse',
    margin: 5,
    borderRadius: 5,
    borderColor: 'forestgreen',
    borderWidth: 2,
    padding: 5,
    textAlign: 'center'
  },
  productColumnName: {
    flex: 5,
    backgroundColor: 'chartreuse',
    margin: 5,
    borderRadius: 5,
    borderColor: 'forestgreen',
    borderWidth: 2,
    padding: 5,
    textAlign: 'center'
  },
  productColumnMoney: {
    flex: 1.3,
    backgroundColor: 'chartreuse',
    margin: 5,
    borderRadius: 5,
    borderColor: 'forestgreen',
    borderWidth: 2,
    padding: 5,
    textAlign: 'center'
  },
  containerEjemploTabs: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white'
  },
  contenido: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: 'center',
    marginBottom: 40,
  },
  botones: {
    position: 'absolute',
    bottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
  },
  boton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: "lawngreen",
    justifyContent: 'center',
    padding: 10,
    borderRadius: 8,
    flex: 1,
    marginHorizontal: 10,
  },
  textoBoton: {
    fontSize: 16,
    marginLeft: 8,
    color: "#333",
  }
})