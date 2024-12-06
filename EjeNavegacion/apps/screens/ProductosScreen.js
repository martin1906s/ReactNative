import { View, Text, StyleSheet, Button } from "react-native";

export const Productos = ({navigation}) => {
    return <View style={styles.container}>
        <Text>Productos</Text>
        <Button title="Ir a Home" onPress={()=>{
            navigation.navigate('HomeNav')
        }}/>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
});