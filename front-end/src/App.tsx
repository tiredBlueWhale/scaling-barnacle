import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ChildrenNavigator, Login, ScannerNavigator, SplashScreen, SettingsNavigator, OrganizationNavigator } from "@screens";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import { AppStackParamList, HomeTabParamList, linking } from "./Routes";

export const Home = () => {
  const Tab = createBottomTabNavigator<HomeTabParamList>();
  return (
    <Tab.Navigator initialRouteName="Children" screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Scanner" component={ScannerNavigator} />
      <Tab.Screen name="Children" component={ChildrenNavigator} options={{ headerShown: false }} />
      <Tab.Screen name="Organization" component={OrganizationNavigator} options={{ headerShown: false }} />
      <Tab.Screen name="Settings" component={SettingsNavigator} options={{ headerShown: false }} />
    </Tab.Navigator>
  )
}

export const Navigation = () => {
  const Stack = createNativeStackNavigator<AppStackParamList>();
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <Stack.Navigator>
      {
        isLoggedIn ? (
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        ) : (
          <Stack.Screen name="Login" options={{ headerShown: false }}>
            {props => <Login {...props} setIsLoggedIn={setIsLoggedIn} />}
          </Stack.Screen>
        )
      }
    </Stack.Navigator>
  )
}

const isLoading = false;
export default function App() {
  if (isLoading) {
    return <SplashScreen />
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer linking={linking}>
        <Navigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};