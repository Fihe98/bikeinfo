import MainScreen from "./screens/MainScreen";
import BikeDetails from "./screens/BikeDetails";
import BikeList from "./screens/BikeList";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name="Main"
        component={MainScreen}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name="List"
        component={BikeList}
        />
        <Stack.Screen
        name="Details"
        component={BikeDetails}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
};
