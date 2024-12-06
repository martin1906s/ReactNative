import { StyleSheet, View, Text, Alert } from 'react-native';
import { Button, Icon, Input } from "@rneui/base";
import { useState } from 'react';


export default function HomeScreen() {
  const [nombre,setNombre]=useState("");
  return (
    <View style={styles.container}>
      <Text>Hola</Text>
      <Input 
      value={nombre} 
      onChangeText={setNombre} 
      placeholder='Nombre' 
      label='Nombre'/>
      <Text>{nombre}</Text>
      <Button
        title='ok'
        icon={{
          name: 'phone',
          type: 'feather',
          size: 15,
          color: 'white',
        }}
        onPress={()=>{Alert.alert("Info", 'Hola '+nombre)}}
      />


      <Button
        title='ok'
        icon={<Icon
          name= 'bitcoin'
          type= 'zocial'
          size={150}
          color= 'white'/>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green'
  }
});
