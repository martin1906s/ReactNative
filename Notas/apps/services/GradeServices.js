let grades = [
    { subject: 'Matemáticas', grade: '9.5' },
    { subject: 'Física', grade: '9' }
];

export const saveGrade = (grade) => {
    grades.push(grade);
}
export const getGrades = () => {
    return grades;
}
export const updateGrade = (grade) => {
    const index = grades.findIndex(item => item.subject === grade.subject);
    
    if (index !== -1) {
        grades[index] = { ...grades[index], grade: grade.grade };
        console.log("Nota actualizada:", grades[index]);
    } else {
        console.log("No se encontró la materia para actualizar.");
    }
    console.log("Arreglo actual:", grades);
};


const find=(subject)=>{
    for (let i = 0; i < grades.length; i++) {
        if(grades[i].subject==subject){
            return grades[i];
        }
    }
    return null;
}