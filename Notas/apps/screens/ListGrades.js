import { View, Text, StyleSheet, FlatList, TouchableHighlight } from "react-native";
import { getGrades } from "../services/GradeServices";
import { FAB, ListItem, Avatar } from '@rneui/base';
import { ListItemContent } from "@rneui/base/dist/ListItem/ListItem.Content";
import { ListItemTitle } from "@rneui/base/dist/ListItem/ListItem.Title";
import { useState } from "react";

export const ListGrades = ({ navigation }) => {
    const [time, setTime] = useState();
    const refreshList = () => { setTime(new Date().getTime()) }
    const ItemGrade = ({ nota }) => {
        return <TouchableHighlight onPress={() => { navigation.navigate("GradeFormsNav", { notita: nota, fnRefresh: refreshList }) }}>
            <ListItem bottomDivider>
                <Avatar
                    size={32}
                    rounded
                    source={{ uri: "https://scontent.fuio31-1.fna.fbcdn.net/v/t39.30808-6/454557367_1556720571924863_312710638155442508_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFjwB3oVt-F9W1zirOgbosDZKvOonL8RPFkq86icvxE8aJNhPH5WtI3by2vNltVT6eUE1mO5hVAD2eOliZeLIx_&_nc_ohc=8rrwNp1BfhoQ7kNvgGNVFBR&_nc_zt=23&_nc_ht=scontent.fuio31-1.fna&_nc_gid=AoUWUi79pWpofukYEEhaLTd&oh=00_AYAiVINXaHTP0YPPDjw7CaonemyoCWw6sdvGKkIVi4Zt0Q&oe=67592F60" }} />
                <ListItemContent>
                    <ListItemTitle>{nota.subject}</ListItemTitle>
                </ListItemContent>
                <ListItemContent>
                    <ListItemTitle>{nota.grade}</ListItemTitle>
                </ListItemContent>
            </ListItem>
        </TouchableHighlight>
    }
    return <View style={styles.container}>
        <FlatList
            data={getGrades()}
            renderItem={({ item }) => { return <ItemGrade nota={item} /> }}
            keyExtractor={(item, index) => { return index.toString() }}
            extraData={time} />
        <FAB
            title='+'
            placement="right"
            onPress={() => { navigation.navigate("GradeFormsNav", { notita: null, fnRefresh: refreshList }) }} />
    </View>
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'stretch'
    }
})