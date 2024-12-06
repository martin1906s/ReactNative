import { View, Text, StyleSheet, Button } from 'react-native'

export const Home = ({ navigation }) => {
    return (<View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>Home</Text>
        <View style={styles.boton}>
            <View style={styles.boton1}>
                <Button title='Ir a Contacts' onPress={() => {
                    navigation.navigate('ContactsNav');
                }} />
            </View>
            <View style={styles.boton2}>
                <Button title='Ir a Productos' onPress={() => {
                    navigation.navigate('ProductosNav');
                }} />
            </View>
        </View>
    </View>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 1
    },
    boton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    boton1: {
        marginHorizontal: 2.5
    },boton2: {
        marginHorizontal: 2.5
    },
});
