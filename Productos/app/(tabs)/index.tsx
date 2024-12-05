import React, { useState } from 'react';
import { FlatList, StyleSheet, View, Text, TextInput, ScrollView, Button, Alert } from 'react-native';

export default function HomeScreen() {
  const [productos, setProductos] = useState([
    { nombres: "Doritos", categoria: "Snacks", precioCompra: '0.40', precioVenta: '0.48', id: '001' },
    { nombres: "Manicho", categoria: "Golosinas", precioCompra: '0.20', precioVenta: '0.24', id: '002' },
    { nombres: "Coca-Cola", categoria: "Bebidas", precioCompra: '0.50', precioVenta: '0.60', id: '003' },
    { nombres: "Lays", categoria: "Snacks", precioCompra: '0.45', precioVenta: '0.54', id: '004' },
  ]);
  const [codigo, setCodigo] = useState("");
  const [nombre, setNombre] = useState("");
  const [categoria, setCategoria] = useState("");
  const [precioCompra, setPrecioCompra] = useState("");
  const [precioVenta, setPrecioVenta] = useState("");
  const [productoEditado, setProductoEditado] = useState(null);

  const calcularPrecioVenta = (compra) => (parseFloat(compra) * 1.2).toFixed(2);

  const limpiarFormulario = () => {
    setCodigo("");
    setNombre("");
    setCategoria("");
    setPrecioCompra("");
    setPrecioVenta("");
    setProductoEditado(null);
  };

  const guardarProducto = () => {
    if (!nombre || !categoria || !precioCompra) {
      Alert.alert("Error", "Todos los campos son obligatorios");
      return;
    }

    const nuevoProducto = {
      id: codigo || String(productos.length + 1).padStart(3, '0'),
      nombres: nombre,
      categoria,
      precioCompra,
      precioVenta: calcularPrecioVenta(precioCompra),
    };

    if (productoEditado) {
      setProductos((prevProductos) =>
        prevProductos.map((prod) =>
          prod.id === productoEditado.id ? nuevoProducto : prod
        )
      );
    } else {
      if (productos.find((prod) => prod.id === nuevoProducto.id)) {
        Alert.alert("Error", `El código ${nuevoProducto.id} ya existe.`);
        return;
      }
      setProductos((prevProductos) => [...prevProductos, nuevoProducto]);
    }

    limpiarFormulario();
  };

  const eliminarProducto = (id) => {
    setProductos((prevProductos) =>
      prevProductos.filter((prod) => prod.id !== id)
    );
  };

  const editarProducto = (producto) => {
    setProductoEditado(producto);
    setCodigo(producto.id);
    setNombre(producto.nombres);
    setCategoria(producto.categoria);
    setPrecioCompra(producto.precioCompra);
    setPrecioVenta(producto.precioVenta);
  };

  const renderProducto = ({ item }) => (
    <View style={styles.viewProducto}>
      <View style={styles.id}>
        <Text>{item.id}</Text>
      </View>
      <View style={styles.nombreProducto}>
        <Text style={styles.textProd}>{item.nombres} </Text>
        <Text>({item.categoria})</Text>
      </View>
      <View style={styles.precio}>
        <Text style={styles.textPrecio}>USD {item.precioVenta}</Text>
      </View>
      <View style={styles.boton2}>
        <View style={styles.boton1}>
          <Button title="E" color="purple" onPress={() => editarProducto(item)} />
        </View>
        <View style={styles.boton1}>
          <Button title="X" color="red" onPress={() => eliminarProducto(item.id)} />
        </View>
      </View>
    </View>

  );

  return (
    <View style={styles.contenedor}>
      <ScrollView>
        <Text style={styles.title}>PRODUCTOS</Text>
        <TextInput style={styles.txt} value={codigo} placeholder="Código" onChangeText={setCodigo} editable={!productoEditado}  keyboardType='numeric'/>
        <TextInput style={styles.txt} value={nombre} placeholder="Nombre" onChangeText={setNombre} />
        <TextInput style={styles.txt} value={categoria} placeholder="Categoría" onChangeText={setCategoria} />
        <TextInput
          style={styles.txt}
          value={precioCompra}
          placeholder="Precio de Compra"
          keyboardType="numeric"
          onChangeText={(txt) => {
            setPrecioCompra(txt);
            setPrecioVenta(calcularPrecioVenta(txt));
          }}
        />
        <TextInput style={styles.txt} value={precioVenta} placeholder="Precio de Venta" editable={false} />
        <Button title="Guardar" color="purple" onPress={guardarProducto} />
        <Button title="Nuevo" color="purple" onPress={limpiarFormulario} />
      </ScrollView>
      <Text>Productos {productos.length}</Text>
      <FlatList
        data={productos}
        renderItem={renderProducto}
        keyExtractor={(item) => item.id}
      />
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
    margin: 5
  }
});
