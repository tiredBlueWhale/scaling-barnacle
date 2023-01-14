import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ChildrenList } from "./ChildrenList";
import { ChildrenDetail } from "./ChildrenDetail";
import { ChildrenStackParamList } from '@routes'

export const ChildrenNavigator = () => {
    const Stack = createNativeStackNavigator<ChildrenStackParamList>();
    return (
        <Stack.Navigator>
            <Stack.Screen name="List" component={ChildrenList} />
            <Stack.Screen name="Detail" component={ChildrenDetail} options={({ route }) => ({ title: `${route.params.firstName} ${route.params.lastName}` })} />
        </Stack.Navigator>
    )
}