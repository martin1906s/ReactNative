import { View, StyleSheet } from "react-native";
import { Input, Button } from "@rneui/base";
import { useState } from "react";
import { saveGrade, updateGrade } from "../services/GradeServices";

export const GradeForms = ({navigation,route}) => {
    let isNew=true;
    let subjectR;
    let gradeR;
    if (route.params.notita != null) {
        isNew=false;
    }
    if (!isNew) {
        subjectR=route.params.notita.subject;
        gradeR=route.params.notita.grade;
    }
    const [subject, setSubject] = useState(subjectR);
    const [grade, setGrade] = useState(gradeR==null?null:gradeR+"");
    const [errorSubject, setErrorSubject] = useState();
    const [errorGrade, setErrorGrade] = useState();
    let hasErrors = false;
    

    const save = () => {
        setErrorGrade(null);
        setErrorSubject(null);
        validate();
        if (!hasErrors) {
            if (isNew) {
                saveGrade({ subject, grade });
            } else {
                updateGrade({ subject, grade });
            }
            navigation.goBack();
            route.params.fnRefresh();
        }
    };
    
    const validate = () => {
        if (subject == null || subject == '') {
            setErrorSubject("Ingrese Materia");
            hasErrors = true;
        }
        let gradeFloat = parseFloat(grade);
        if (gradeFloat == null || isNaN(gradeFloat)) {
            setErrorGrade("Ingrese nota");
            hasErrors = true;
        }
        if (gradeFloat < 0 || gradeFloat > 10) {
            setErrorGrade("Ingrese nota entre 0-10");
            hasErrors = true;
        }
    }
    return <View style={styles.container}>
        <Input
            value={subject}
            onChangeText={setSubject}
            placeholder="Ej. Matematicas"
            label='Materia'
            errorMessage={errorSubject} 
            disabled={!isNew}/>
        <Input
            value={grade}
            onChangeText={setGrade}
            placeholder="Ej. 10"
            label='Nota'
            keyboardType="numeric"
            errorMessage={errorGrade} />


        <Button
            title='Guardar'
            icon={{
                name: 'save',
                type: 'font-awesome',
                size: 30,
                color: 'white'
            }}
            buttonStyle={{
                backgroundColor: 'indigo'
            }}
            onPress={save} />
    </View>
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    }
})