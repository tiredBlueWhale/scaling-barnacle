import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SettingsStackParamList } from '@routes'
import { SettingsList } from "./SettingsList";

export const SettingsNavigator = () => {
    const Stack = createNativeStackNavigator<SettingsStackParamList>();
    return (
        <Stack.Navigator>
            <Stack.Screen name="List" component={SettingsList} />
        </Stack.Navigator>
    )
}