import React, { useState } from 'react';
import { Modal, FlatList, StyleSheet, View, Text, TextInput, ScrollView, Button, Alert, TouchableHighlight } from 'react-native';
import { ThemedText } from '@/components/ThemedText';

let productos = [
  { nombres: "Doritos", categoria: "Snacks", precioCompra: '0.40', precioVenta: '0.45', id: '001' },
  { nombres: "Manicho", categoria: "Golosinas", precioCompra: '0.20', precioVenta: '0.25', id: '2' },
  { nombres: "Coca-Cola", categoria: "Bebidas", precioCompra: '0.50', precioVenta: '0.60', id: '3' },
  { nombres: "Lays", categoria: "Snacks", precioCompra: '0.45', precioVenta: '0.55', id: '4' },
  { nombres: "Chicles", categoria: "Golosinas", precioCompra: '0.15', precioVenta: '0.20', id: '5' },
  { nombres: "Agua Mineral", categoria: "Bebidas", precioCompra: '0.30', precioVenta: '0.40', id: '6' },
  { nombres: "Oreo", categoria: "Galletas", precioCompra: '0.35', precioVenta: '0.50', id: '7' },
  { nombres: "Pringles", categoria: "Snacks", precioCompra: '0.80', precioVenta: '0.90', id: '8' }
];

export default function HomeScreen() {
  const [codigo, setCodigo] = useState("");
  const [nombre, setNombre] = useState("");
  const [categoria, setCategoria] = useState("");
  const [precioCompra, setPrecioCompra] = useState("");
  const [precioVenta, setPrecioVenta] = useState("");
  const [numProductos, setNumProductos] = useState(productos.length);
  const [modalVisible, setModalVisible] = useState(false);
  const [idEliminar, setIdEliminar] = useState(null);

  let MisProductos = (prod) => {
    return (
      <View style={styles.viewProducto}>
        <View style={styles.id}>
          <Text>{prod.producto.id}</Text>
        </View>
        <View style={styles.nombreProducto}>
          <Text style={styles.textProd}>{prod.producto.nombres}</Text>
          <Text>({prod.producto.categoria})</Text>
        </View>
        <View style={styles.precio}>
          <Text style={styles.textPrecio}>USD {prod.producto.precioVenta}</Text>
        </View>
        <View style={styles.boton2}>
          <View style={styles.boton1}>
            <TouchableHighlight onPress={() => {
              setCodigo(prod.producto.id);
              setCategoria(prod.producto.categoria);
              setNombre(prod.producto.nombres);
              setPrecioCompra(prod.producto.precioCompra);
              setPrecioVenta(prod.producto.precioVenta);
            }}>
              <View>
                <Text>E</Text>
              </View>
            </TouchableHighlight>
          </View>
          <View style={styles.boton3}>
            <TouchableHighlight onPress={() => {
              setIdEliminar(prod.producto.id);
              setModalVisible(true);
            }} >
              <View>
                <Text>X</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    )
  };

  const eliminarProducto = () => {
    if (idEliminar !== null) {
      productos = productos.filter((item) => item.id !== idEliminar);
      setNumProductos(productos.length);
      setModalVisible(false);
    }
  };

  const limpiar = () => {
    setCategoria("");
    setCodigo("");
    setNombre("");
    setPrecioCompra("");
    setPrecioVenta("");
  };

  return (
    <View style={styles.contenedor}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>¿Está seguro que quiere eliminar?</Text>
            <View style={styles.modalButtons}>
              <Button title="Cancelar" color="lawngreen" onPress={() => setModalVisible(false)} />
              <Button title="Aceptar" color="red" onPress={eliminarProducto} />
            </View>
          </View>
        </View>
      </Modal>

      <ScrollView>
        <View style={styles.viewTitle}>
          <ThemedText style={styles.title}>PRODUCTOS</ThemedText>
        </View>
        <TextInput
          style={styles.txt}
          value={codigo}
          placeholder='Codigo'
          onChangeText={(txt) => setCodigo(txt)}
          keyboardType='numeric'
        />
        <TextInput
          style={styles.txt}
          value={nombre}
          placeholder='Nombre'
          onChangeText={(txt) => setNombre(txt)}
        />
        <TextInput
          style={styles.txt}
          value={categoria}
          placeholder='Categoría'
          onChangeText={(txt) => setCategoria(txt)}
        />
        <TextInput
          style={styles.txt}
          value={precioCompra}
          placeholder='Precio de Compra'
          keyboardType='numeric'
          onChangeText={(txt) => setPrecioCompra(txt)}
        />
        <TextInput
          style={styles.txt}
          value={precioVenta}
          placeholder='Precio de Venta'
          onChangeText={(txt) => setPrecioVenta(txt)}
          editable={false}
        />
        <View style={styles.boton}>
          <Button title='Nuevo' color='purple' onPress={limpiar} />
        </View>
      </ScrollView>

      <View style={styles.viewProductos}>
        <Text>Productos: {numProductos}</Text>
        <FlatList
          data={productos}
          renderItem={(producto) => {
            return <MisProductos producto={producto.item} />;
          }}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: 'plum',
    padding: 5,
  },
  title: {
    color: 'white',
    fontSize: 30,
    fontWeight: '700',
    textAlign: 'center',
    padding: 10,
  },
  productos: {
    flex: 4,
    marginTop: 30,
    justifyContent: 'space-around',
    borderBottomWidth: 5,
    borderColor: 'white'
  },
  textProd: {
    fontSize: 30,
    color: 'white',
    marginVertical: 5,
    paddingVertical: 5
  },
  textPrecio: {
    color: 'white'
  },
  viewTitle: {
    flex: 1.65,
    marginTop: 30,
    justifyContent: 'center',
    borderBottomWidth: 5,
    borderColor: 'white'
  },
  viewProductos: {
    flex: 6,
    borderTopWidth: 5,
    borderTopColor: 'white'
  },
  viewProducto: {
    flex: 1,
    backgroundColor: 'thistle',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: 5,
    padding: 15,
    borderRadius: 30,
    borderWidth: 10,
    borderColor: 'purple'
  },
  autor: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 10,
    borderTopWidth: 5,
    borderColor: 'white'
  },
  txt: {
    borderRadius: 10,
    borderWidth: 5,
    borderColor: 'purple',
    padding: 5,
    margin: 5
  },
  boton: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: 5,
  },
  boton2: {
    flex: 1,
  },
  nombreProducto: {
    flex: 4,
    paddingLeft: 20
  },
  id: {
    flex: 0.6
  },
  precio: {
    flex: 1.5,
  },
  boton1: {
    margin: 5,
    alignItems: 'center',
    backgroundColor: '#7fff00',
    padding: 10
  },
  boton3: {
    margin: 5,
    alignItems: 'center',
    backgroundColor: '#dc143c',
    padding: 10
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4b0082',
    opacity: 0.8
  },
  modalContent: {
    width: 'auto',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});
