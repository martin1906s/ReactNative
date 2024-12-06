import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GradeForms } from "../../apps/screens/GradeForm";
import { ListGrades } from "../../apps/screens/ListGrades";

export default function HomeScreen() {
  const StackGrades = createNativeStackNavigator();
  return (
    <StackGrades.Navigator>
      <StackGrades.Screen name="ListGradesNav" component={ListGrades} />
      <StackGrades.Screen name="GradeFormsNav" component={GradeForms} />
    </StackGrades.Navigator>
  );
}

