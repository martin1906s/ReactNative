import { useState } from 'react';
import { StyleSheet, FlatList, View, Text, TextInput, Button, Alert } from 'react-native';

let personas = [
  { nombre: 'Juan', apellido: 'Perez', cedula: '1715614788' },
  { nombre: 'Martin', apellido: 'Simbaña', cedula: '1751013192' },
  { nombre: 'Elba', apellido: 'Zurita', cedula: '1234567890' }
]
let esNuevo = true;
let indiceSeleccionado = NaN;
export default function HomeScreen() {
  const [txtCedula, setTxtCedula] = useState("");
  const [txtNombre, setTxtNombre] = useState("");
  const [txtApellido, setTxtApellido] = useState("");
  const [numeroElementos, setNumeroElementos] = useState(personas.length);

  let ItemPersona = (props) => {
    return (
      <View style={styles.itemPersona}>
        <View style={styles.areaIndice}>
          <Text>{props.indice + 1}</Text>
        </View>
        <View style={styles.areaDatos}>
          <Text>{props.persona.nombre} {props.persona.apellido}</Text>
          <Text>{props.persona.cedula}</Text>
        </View>
        <View style={styles.itemBotones}>
          <Button title=' E ' color='lawngreen' onPress={() => {
            setTxtCedula(props.persona.cedula);
            setTxtNombre(props.persona.nombre);
            setTxtApellido(props.persona.apellido);
            esNuevo = false;
            indiceSeleccionado = props.indice;
          }} />
          <Button title=' X' color='red' onPress={() => {
            indiceSeleccionado = props.indice;
            personas.splice(indiceSeleccionado, 1);
            setNumeroElementos(personas.length);
          }} />
        </View>
      </View>
    )
  };
  let limpiar = () => {
    setTxtCedula("");
    setTxtNombre("");
    setTxtApellido("");
    esNuevo = true;
  }
  let guardarPersona = () => {
    if (esNuevo) {
      if(existePersona()){
        Alert.alert("INFO","Persona con cedula "+txtCedula+" ya existe")
      }else{
        let persona = { nombre: txtNombre, apellido: txtApellido, cedula: txtCedula }
      personas.push(persona);
      }
    } else {
      personas[indiceSeleccionado].nombre = txtNombre;
      personas[indiceSeleccionado].apellido = txtApellido;
    }
    limpiar();
    setNumeroElementos(personas.length);
  }
  let existePersona = () => {
    for (let i = 0; i < personas.length; i++) {
      if (personas[i].cedula == txtCedula) {
        return true;
      }
    }
    return false;
  }
  return (
    <View style={styles.container}>
      <View style={styles.areaCabecera}>
        <Text>Personas</Text>
        <TextInput
          style={styles.txt}
          value={txtCedula}
          placeholder='Cedula'
          onChangeText={setTxtCedula}
          keyboardType='numeric'
          editable={esNuevo} />
        <TextInput
          style={styles.txt}
          value={txtNombre}
          placeholder='Nombre'
          onChangeText={setTxtNombre} />
        <TextInput
          style={styles.txt}
          value={txtApellido}
          placeholder='Apellido'
          onChangeText={setTxtApellido} />
        <View style={styles.areaBotones}>
          <Button title='Guardar' onPress={() => { guardarPersona() }} color='blue'></Button>
          <Button title='Nuevo' onPress={() => { limpiar() }} color='red'></Button>
        </View>
        <Text>Personas: {numeroElementos}</Text>
      </View>
      <View style={styles.areaContenido}>
        <FlatList
          style={styles.lista}
          data={personas}
          renderItem={(obj) => {
            return <ItemPersona indice={obj.index} persona={obj.item} />
          }}
          keyExtractor={(item) => { return item.cedula }} />
      </View>
      <View style={styles.areaPie}>
        <Text>Autor: Martín Simbaña</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightcoral',
    padding: 9
  },
  lista: {
    backgroundColor: 'lightgreen',
  },
  itemPersona: {
    flex: 1,
    backgroundColor: 'orchid',
    margin: 10,
    padding: 10,
    borderRadius: 20,
    flexDirection: 'row',
  },
  areaCabecera: {
    flex: 4,
    borderWidth: 2,
    backgroundColor: 'skyblue',
    justifyContent: 'space-around',
    alignItems: 'stretch',
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  areaContenido: {
    flex: 5,
    borderWidth: 2,
    backgroundColor: 'slateblue',
  },
  areaPie: {
    flex: 0.3,
    backgroundColor: 'springgreen',
    justifyContent: 'center',
    alignItems: 'flex-end',
    borderWidth: 2,
    paddingHorizontal: 5
  },
  areaIndice: {
    flex: 0.9,
    backgroundColor: 'snow',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5
  },
  itemBotones: {
    flex: 2.5,
    backgroundColor: 'lavender',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginHorizontal: 5,
    borderRadius: 10,
  },
  areaDatos: {
    flex: 5,
    backgroundColor: 'lightgrey',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  txt: {
    borderRadius: 10,
    borderWidth: 3,
    borderColor: 'slateblue',
    padding: 5,
    marginVertical: 5
  },
  areaBotones: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  }

});
