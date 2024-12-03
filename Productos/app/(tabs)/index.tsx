import { ThemedText } from '@/components/ThemedText';
import { FlatList, StyleSheet, View } from 'react-native';

let productos = [
  { nombre: "Doritos", categoria: "Snacks", precioCompra: 0.40, precioVenta: 0.45, id: 100 },
  { nombre: "Manicho", categoria: "Golosinas", precioCompra: 0.20, precioVenta: 0.25, id: 101 },
  { nombre: "Coca-Cola", categoria: "Bebidas", precioCompra: 0.50, precioVenta: 0.60, id: 102 },
  { nombre: "Lays", categoria: "Snacks", precioCompra: 0.45, precioVenta: 0.55, id: 103 },
  { nombre: "Chicles", categoria: "Golosinas", precioCompra: 0.15, precioVenta: 0.20, id: 104 },
  { nombre: "Agua Mineral", categoria: "Bebidas", precioCompra: 0.30, precioVenta: 0.40, id: 105 },
  { nombre: "Oreo", categoria: "Galletas", precioCompra: 0.35, precioVenta: 0.50, id: 106 },
  { nombre: "Pringles", categoria: "Snacks", precioCompra: 0.80, precioVenta: 0.90, id: 107 }
];


export default function HomeScreen() {
  return (
    <View style={styles.contenedor}>
      <View style={styles.viewTitle}>
        <ThemedText style={styles.title}>PRODUCTOS</ThemedText>
      </View>
      <View style={styles.viewProductos}>
        <FlatList
          data={productos}
          renderItem={(prod) => {
            return (<View style={styles.viewProducto}>
              <ThemedText style={styles.textProd}>{prod.item.nombre} ({prod.item.categoria})</ThemedText>
              <ThemedText style={styles.textPrecio}>USD {prod.item.precioVenta}</ThemedText>
            </View>)
          }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: 'plum'
  },
  title: {
    color: 'white',
    fontSize: 30,
    fontWeight: '700',
    textAlign: 'center',
    padding: 10,
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
    flex: 1,
    marginTop: 30,
    justifyContent: 'center'
  },
  viewProductos:{
    flex: 10
  },
  viewProducto: {
    backgroundColor: 'thistle',
    margin: 10,
    padding: 15,
    borderRadius: 30,
    borderWidth: 10,
    borderColor: 'purple'
  }
});
