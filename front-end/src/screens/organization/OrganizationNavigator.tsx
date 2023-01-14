import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { OrganizationStackParamList } from '@routes'
import { OrganizationList } from "./OrganizationList";

export const OrganizationNavigator = () => {
    const Stack = createNativeStackNavigator<OrganizationStackParamList>();
    return (
        <Stack.Navigator>
            <Stack.Screen name="List" component={OrganizationList} />
        </Stack.Navigator>
    )
}