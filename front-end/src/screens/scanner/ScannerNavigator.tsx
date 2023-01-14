import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ScannerParamList } from '@routes'
import { Scanner } from "./Scanner";

export const ScannerNavigator = () => {
    const Stack = createNativeStackNavigator<ScannerParamList>();
    return (
        <Stack.Navigator>
            <Stack.Screen name="Camera" component={Scanner} />
        </Stack.Navigator>
    )
}